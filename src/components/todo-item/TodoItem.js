import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import apiUrl from '../../api-url';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import 'bootstrap-icons/font/bootstrap-icons.css';

import ConfirmDeleteTask from '../modal/ConfirmDeleteTask';

function TodoItem({ id, title, detail, isComplete, onMarkAsComplete, onDeleteTask }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isMarkingTaskComplete, setIsMarkingTaskComplete] = useState(false);

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleHideConfirmModal = () => setShowConfirmModal(false);

  const handleMarkComplete = async () => {
    setIsMarkingTaskComplete(true);

    await axios.put(`${apiUrl}${id}/`, {
        "is_completed": !isComplete
      })
    .then((response) => {
      onMarkAsComplete(id);
    })
    .catch((error) => {
      console.log(error);
    });

    setIsMarkingTaskComplete(false);
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
        <OverlayTrigger
          key={`edit-${id}`}
          placement="top"
          overlay={
            <Tooltip id={`edit-${id}`}>
              Edit task
            </Tooltip>
          }
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(`/edit/${id}`)}
            disabled={isComplete}
            title="Edit task"
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          key={`delete-${id}`}
          placement="top"
          overlay={
            <Tooltip id={`delete-${id}`}>
              Delete task
            </Tooltip>
          }
        >
          <Button
            variant="danger"
            size="lg"
            onClick={handleShowConfirmModal}
            title="Delete task"
          >
            <i className="bi bi-trash"></i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          key={`mark-${id}`}
          placement="top"
          overlay={
            <Tooltip id={`mark-${id}`}>
              Mark complete
            </Tooltip>
          }
        >
          <Button
            variant="success"
            size="lg"
            onClick={() => handleMarkComplete()}
            title="Mark task complete"
            disabled={isMarkingTaskComplete}
          >
            <i className="bi bi-check2-square"></i>
          </Button>
        </OverlayTrigger>
      </div>
      {showConfirmModal &&
        <ConfirmDeleteTask
          id={id}
          title={title}
          show={showConfirmModal}
          onHide={handleHideConfirmModal}
          onConfirmDeleteClick={onDeleteTask}
        />
      }
    </>
  );
}

export default TodoItem;
