import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import apiUrl from '../../api-url';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Spinner from 'react-bootstrap/Spinner';

function ConfirmDeleteTask({ id, title, show, onHide, onConfirmDeleteClick }) {
  const [hasTaskBeenDeleted, setHasTaskBeenDeleted] = useState(null);
  const [isTaskDeleting, setIsTaskDeleting] = useState(false);

  const navigate = useNavigate();

  const handleDeleteTask = async () => {
    setIsTaskDeleting(true);

    await axios.delete(`${apiUrl}${id}/`)
    .then((response) => {
      onConfirmDeleteClick(id);
      setHasTaskBeenDeleted(true);
      onHide();
      navigate("/");
    })
    .catch((error) => {
      setHasTaskBeenDeleted(false);
      console.log(error);
    });
  };

  return (
    <>
    <Modal centered show={true} onHide={onHide}>
      <ModalDialog>
        <ModalHeader closeButton>
          <ModalTitle>Are You sure?</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Confirm deleting the task <span className="fst-italic fw-bold">"{title}"</span> ?</p>
          {isTaskDeleting &&
            <div className="d-flex gap-3 justify-content-center align-items-baseline">
              <p className="mt-4 fst-italic text-center">Task is deleting... </p>
              <Spinner
                animation="border"
                variant="primary"
                role="status"
                size="sm"
              >
                <span className="visually-hidden">Task is deleting...</span>
              </Spinner>
            </div>
          }
        </ModalBody>
        <ModalFooter className="d-flex justify-content-evenly">
          <Button
            size="lg"
            variant="outline-danger"
            onClick={handleDeleteTask}
            disabled={isTaskDeleting}
          >
            Delete
          </Button>
          <Button
            size="lg"
            variant="outline-secondary"
            onClick={onHide}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
    {hasTaskBeenDeleted &&
      <p className="fs-3 text-success">Task has been deleted</p>
    }
    </>
  );
}

export default ConfirmDeleteTask;
