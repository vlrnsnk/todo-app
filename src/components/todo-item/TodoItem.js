import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import 'bootstrap-icons/font/bootstrap-icons.css';

import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function TodoItem({ id, title, detail, isComplete }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleHideConfirmModal = () => setShowConfirmModal(false);

  const handleDeleteTask = (id, title) => {
    console.log(`Deleting task with id ${id} and title ${title}`);
  };

  const handleMarkComplete = (id) => {
    console.log(`Mark task with id ${id} as complete`);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center text-sm-start">
        {isComplete && <Badge bg="success" className="mb-3">Completed</Badge>}
        <h2 className="mb-2 mb-sm-3 mb-md-4 fw-bold">{title}</h2>
        <p className="fs-5 fst-italic">{detail}</p>
        {/* <p>{isComplete ? 'completed' : 'pending'}</p> */}
      </div>
      <div className="d-flex gap-3">
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate(`/edit/${id}`)}
          disabled={isComplete}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={handleShowConfirmModal}
        >
          <i className="bi bi-trash"></i>
        </Button>
        <Button
          variant="success"
          size="lg"
          onClick={() => handleMarkComplete(id)}
        >
          <i className="bi bi-check2-square"></i>
        </Button>
      </div>
      {showConfirmModal &&
        <ConfirmDeleteTask
          id={id}
          title={title}
          show={showConfirmModal}
          onHide={handleHideConfirmModal}
          onConfirmDeleteClick={(id, title) => handleDeleteTask(id, title)}
        />
      }
    </>
  );
}

export default TodoItem;
