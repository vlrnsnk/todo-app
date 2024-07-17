import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';
import apiUrl from '../../api-url';

function EditTaskForm({ id, title, detail, onEditTask }) {
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState(title ?? '');
  const [newDetail, setNewDetail] = useState(detail ?? '');

  const [taskIsEditing, setTaskIsEditing] = useState(false);
  const [hasTaskBeenEdited, setHasTaskBeenEdited] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTaskIsEditing(true);

    await axios.put(`${apiUrl}${id}/`, {
      "title": newTitle,
      "detail": newDetail
    })
    .then((response) => {
      setHasTaskBeenEdited(true);
      onEditTask(id, newTitle, newDetail);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((error) => {
      setHasTaskBeenEdited(false);
      console.log(error);
    });

    setTaskIsEditing(false);
  };

  return (
    <>
      {hasTaskBeenEdited ?
      <p className="fs-3 text-success">Task has been edited</p> :
      <Form className="w-75 w-sm-50" onSubmit={handleSubmit}>
        {taskIsEditing &&
          <div className="d-flex gap-3 justify-content-center align-items-baseline">
            <p className="fs-4 text-info text-center pb-0">Task is editing...</p>
            <Spinner
                animation="border"
                variant="info"
                role="status"
                size="sm"
              >
                <span className="visually-hidden">Task is editing...</span>
              </Spinner>
          </div>
        }
        <TaskTitleFormGroup
          title={newTitle}
          handleChange={(event) => setNewTitle(event.target.value)}
          isDisabled={taskIsEditing}
        />
        <TaskDetailFormGroup
          detail={newDetail}
          handleChange={(event) => setNewDetail(event.target.value)}
          isDisabled={taskIsEditing}
        />
        <div className='d-flex flex-column flex-sm-row gap-3 justify-content-between'>
          <Button
            className="w-100 w-sm-25"
            size="lg"
            variant="outline-success"
            type="submit"
            disabled={taskIsEditing}
          >
            Update
          </Button>
          <Button
            className="w-100 w-sm-25"
            size="lg"
            variant="outline-danger"
            type="submit"
            onClick={() => navigate("/")}
            disabled={taskIsEditing}
          >
            Cancel
          </Button>
        </div>
        {hasTaskBeenEdited === false ?
          <p className="fs-3 text-danger text-center mt-3 mt-md-4 mt-lg-5">
            There was an error editing your task
          </p> :
          null
        }
      </Form>
      }
    </>
  );
}

export default EditTaskForm;
