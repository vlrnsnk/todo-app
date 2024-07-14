import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TodoItem({ title, detail, isComplete }) {
  return (
    <>
      <div className="text-center text-sm-start">
        <h2 className="mb-2 mb-sm-3 mb-md-4 fw-bold">{title}</h2>
        <p className="fs-5 fst-italic">{detail}</p>
        {/* <p>{isComplete ? 'completed' : 'pending'}</p> */}
      </div>
      <div className="d-flex gap-3">
        <Button variant="primary" size="lg">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" size="lg">
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="success" size="lg">
          <i className="bi bi-check2-square"></i>
        </Button>
      </div>
    </>
  );
}

export default TodoItem;
