import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';
import apiUrl from '../../api-url';

function AddTaskForm({ onAddTask }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [taskIsAdding, setTaskIsAdding] = useState(false);
  const [hasTaskBeenAdded, setHasTaskBeenAdded] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTaskIsAdding(true);

    await axios.post(`${apiUrl}`, {
      "title": title,
      "detail": detail
    })
    .then((response) => {
      setHasTaskBeenAdded(true);
      const id = response.data.data.id;
      onAddTask(id, title, detail);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((error) => {
      setHasTaskBeenAdded(false);
      console.log(error);
    });

    setTaskIsAdding(false);
  };

  return (
    <>
      {hasTaskBeenAdded ?
        <p className="fs-3 text-success">Task has been added</p> :
        <Form className="w-75 w-sm-50" onSubmit={handleSubmit}>
          {taskIsAdding &&
            <div className="d-flex gap-3 justify-content-center align-items-baseline">
              <p className="fs-4 text-info text-center pb-0">Task is adding...</p>
              <Spinner
                  animation="border"
                  variant="info"
                  role="status"
                  size="sm"
                >
                  <span className="visually-hidden">Task is adding...</span>
                </Spinner>
            </div>
          }
          <TaskTitleFormGroup
            title={title}
            handleChange={(event) => setTitle(event.target.value)}
            isDisabled={taskIsAdding}
          />
          <TaskDetailFormGroup
            detail={detail}
            handleChange={(event) => setDetail(event.target.value)}
            isDisabled={taskIsAdding}
          />
          <Button
            className="w-100"
            size="lg"
            variant="success"
            type="submit"
            disabled={taskIsAdding}
          >
            Add
          </Button>
          {hasTaskBeenAdded === false ?
            <p className="fs-3 text-danger text-center mt-3 mt-md-4 mt-lg-5">
              There was an error adding your task
            </p> :
            null
          }
        </Form>
      }
    </>
  );
}

export default AddTaskForm;
