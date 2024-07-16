import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';
import apiUrl from '../../api-url';

function EditTaskForm({ id, title, detail }) {
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState(title ?? '');
  const [newDetail, setNewDetail] = useState(detail ?? '');

  const [hasTaskBeenEdited, setHasTaskBeenEdited] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.put(`${apiUrl}/${id}/`, {
      "title": newTitle,
      "detail": newDetail
    })
    .then((response) => {
      console.log(response);
      setHasTaskBeenEdited(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((error) => {
      setHasTaskBeenEdited(false);
      console.log(error);
    });
  };

  return (
    <>
      {hasTaskBeenEdited ?
      <p className="fs-3 text-success">Task has been edited</p> :
      <Form className="w-75 w-sm-50" onSubmit={handleSubmit}>
        <TaskTitleFormGroup
          title={newTitle}
          handleChange={(event) => setNewTitle(event.target.value)}
        />
        <TaskDetailFormGroup
          detail={newDetail}
          handleChange={(event) => setNewDetail(event.target.value)}
        />
        <div className='d-flex flex-column flex-sm-row gap-3 justify-content-between'>
          <Button
            className="w-100 w-sm-25"
            size="lg"
            variant="success"
            type="submit"
          >
            Update
          </Button>
          <Button
            className="w-100 w-sm-25"
            size="lg"
            variant="danger"
            type="submit"
            onClick={() => navigate("/")}
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
