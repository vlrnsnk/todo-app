import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';

function AddTaskForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [hasTaskBeenAdded, setHasTaskBeenAdded] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://127.0.0.1:8000/api/tasks/', {
      "title": title,
      "detail": detail
    })
    .then((response) => {
      console.log(response);
      setHasTaskBeenAdded(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((error) => {
      setHasTaskBeenAdded(false);
      console.log(error);
    });
  };

  return (
    <>
      {hasTaskBeenAdded ?
        <p className="fs-3 text-success">Task has been added</p> :
        <Form className="w-75 w-sm-50" onSubmit={handleSubmit}>
          <TaskTitleFormGroup
            title={title}
            handleChange={(event) => setTitle(event.target.value)}
          />
          <TaskDetailFormGroup
            detail={detail}
            handleChange={(event) => setDetail(event.target.value)}
          />
          <Button
            className="w-100"
            size="lg"
            variant="success"
            type="submit"
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
