import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import apiUrl from '../../api-url';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import 'bootstrap-icons/font/bootstrap-icons.css';

import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function TodoItem({ id, title, detail, isComplete }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [hasTaskBeenDeleted, setHasTaskBeenDeleted] = useState(null);

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleHideConfirmModal = () => setShowConfirmModal(false);

  const handleDeleteTask = async () => {
    await axios.delete(`${apiUrl}/${id}/`)
    .then((response) => {
      console.log(response);
      setHasTaskBeenDeleted(true);
    })
    .catch((error) => {
      setHasTaskBeenDeleted(false);
      console.log(error);
    });
  };

  const handleMarkComplete = async () => {
    console.log(`Mark task with id ${id} as complete`);
    console.log(id);
    await axios.put(`${apiUrl}/${id}/`, {
        "is_completed": !isComplete
      })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
          title="Edit task"
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={handleShowConfirmModal}
          title="Delete task"
        >
          <i className="bi bi-trash"></i>
        </Button>
        <Button
          variant="success"
          size="lg"
          onClick={() => handleMarkComplete()}
          title="Mark task complete"
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
          onConfirmDeleteClick={() => handleDeleteTask()}
        />
      }
    </>
  );
}

export default TodoItem;
