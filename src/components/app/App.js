import './App.css';
import todoList from '../../mocks/todo-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import TodoItem from '../todo-item/TodoItem';

function App() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center p-3 p-sm-4 p-md-5 col-12 col-md-10 col-xl-8 col-xxl-6">
      <h1 className="mb-4 mb-sm-5">ToDo App</h1>
      <ListGroup className="gap-4 mb-3">
        {todoList.map(({ id, title, detail, isComplete }) => (
          <ListGroupItem
            className="d-flex flex-column flex-sm-row gap-1 gap-sm-3 gap-md-5 align-items-center justify-content-between border border-secondary rounded shadow p-3 p-sm-4 mb-2 mb-sm-3 mb-md-4"
            key={id}>
            <TodoItem
              title={title}
              detail={detail}
              isComplete={isComplete}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
      <Button className="w-75 w-sm-50" variant="outline-primary" size="lg">Add Task</Button>
    </Container>
  );
}

export default App;
