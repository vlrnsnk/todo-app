import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TodoItem({ title, detail, isComplete }) {
  return (
    <>
      <p>{title}</p>
      <p>{detail}</p>
      <p>{isComplete ? 'completed' : 'pending'}</p>
      <Button variant="primary">
        <i className="bi bi-pencil-square"></i>
      </Button>
      <Button variant="danger">
        <i className="bi bi-trash"></i>
      </Button>
      <Button variant="success">
        <i className="bi bi-check2-square"></i>
      </Button>
    </>
  );
}

export default TodoItem;
