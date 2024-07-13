import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TodoItem({ title, detail, isComplete }) {
  return (
    <>
      <div className="text-center text-sm-start">
        <h2>{title}</h2>
        <p>{detail}</p>
        {/* <p>{isComplete ? 'completed' : 'pending'}</p> */}
      </div>
      <div className="d-flex gap-2">
        <Button variant="primary">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="success">
          <i className="bi bi-check2-square"></i>
        </Button>
      </div>
    </>
  );
}

export default TodoItem;
