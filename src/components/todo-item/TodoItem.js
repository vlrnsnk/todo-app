import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import 'bootstrap-icons/font/bootstrap-icons.css';

import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function TodoItem({ id, title, detail, isComplete }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [hasTaskBeenDeleted, setHasTaskBeenDeleted] = useState(null);

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleHideConfirmModal = () => setShowConfirmModal(false);

  const handleDeleteTask = async (id) => {
    console.log(id);
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`)
    .then((response) => {
      console.log(response);
      setHasTaskBeenDeleted(true);
      // setTimeout(() => {
      //   navigate("/");
      // }, 1000);
    })
    .catch((error) => {
      setHasTaskBeenDeleted(false);
      console.log(error);
    });
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
          onConfirmDeleteClick={(id) => handleDeleteTask(id)}
        />
      }
    </>
  );
}

export default TodoItem;
