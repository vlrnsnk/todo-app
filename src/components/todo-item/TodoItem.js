import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import 'bootstrap-icons/font/bootstrap-icons.css';

import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function TodoItem({ id, title, detail, isComplete }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const handleDeleteTask = (id, title) => {
    console.log(`Deleting task with id ${id} and title ${title}`);
  };

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
        <Button variant="danger" size="lg" onClick={handleShow}>
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="success" size="lg">
          <i className="bi bi-check2-square"></i>
        </Button>
      </div>
      {show &&
        <ConfirmDeleteTask
          id={id}
          title={title}
          show={show}
          onHide={handleHide}
          onConfirmDeleteClick={(id, title) => handleDeleteTask(id, title)}
        />
      }
    </>
  );
}

export default TodoItem;
