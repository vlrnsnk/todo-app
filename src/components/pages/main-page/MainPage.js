import { useNavigate } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

import Header from '../../header/Header';
import TodoItem from '../../todo-item/TodoItem';

function MainPage({ todoList }) {
  const navigate = useNavigate();

  return (
    <>
      <Header text="ToDo App" />
      <Button
        className="w-75 w-sm-50 mb-4 mb-md-5"
        variant="outline-primary"
        size="lg"
        onClick={() => navigate("/add")}
      >
        Add Task
      </Button>
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
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default MainPage;
