import './App.css';
import todoList from '../../mocks/todo-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import TodoItem from '../todo-item/TodoItem';

function App() {
  return (
    <>
      <h1 className="container">TODO APP</h1>
      <ListGroup>
        {todoList.map(({ id, title, detail, isComplete }) => (
          <ListGroupItem key={id}>
            <TodoItem
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

export default App;
