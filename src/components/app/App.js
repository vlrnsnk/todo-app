import { useState } from 'react';

import todoList from '../../mocks/todo-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Header from '../header/header';
import TodoItem from '../todo-item/TodoItem';
import AddTaskForm from '../add-task-form/AddTaskForm';
import EditTaskForm from '../edit-task-form/EditTaskForm';
import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function App() {
  const [show, setShow] = useState(false);

  const handleShow = (id, title) => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeleteTask = (id, title) => {
    console.log(`Deleting task with id ${id} and title ${title}`);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center p-3 p-sm-4 p-md-5 col-12 col-md-10 col-xl-8 col-xxl-6">
      <Header />
      <ListGroup className="gap-4 mb-3">
        {todoList.map(({ id, title, detail, isComplete }) => (
          <ListGroupItem
            className="d-flex flex-column flex-sm-row gap-1 gap-sm-3 gap-md-5 align-items-center justify-content-between border border-secondary rounded shadow p-3 p-sm-4 mb-2 mb-sm-3 mb-md-4"
            key={id}>
            <TodoItem
              id={id}
              title={title}
              detail={detail}
              isComplete={isComplete}
              onDeleteClick={handleShow}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
      <Button className="w-75 w-sm-50" variant="outline-primary" size="lg">Add Task</Button>
      <AddTaskForm/>
      <EditTaskForm
        title="Test edit title"
        detail="Test edit detail"
      />
      <ConfirmDeleteTask show={show} onHide={handleClose} onConfirmDeleteClick={handleDeleteTask} />
    </Container>
  );
}

export default App;
