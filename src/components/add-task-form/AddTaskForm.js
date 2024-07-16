// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';

function AddTaskForm() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://127.0.0.1:8000/api/tasks/', {
      "title": title,
      "detail": detail
    })
    .then((response) => {
      console.log(response);
      // navigate("");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
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
    </Form>
  );
}

export default AddTaskForm;
