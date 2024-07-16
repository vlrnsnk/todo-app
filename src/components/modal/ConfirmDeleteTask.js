import { useState } from 'react';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

function ConfirmDeleteTask({ id, title, show, onHide, onConfirmDeleteClick }) {
  const [hasTaskBeenDeleted, setHasTaskBeenDeleted] = useState(null);

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
  return (
    <Modal show={show} onHide={onHide}>
      <ModalDialog>
        <ModalHeader closeButton>
          <ModalTitle>Are You sure?</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Confirm deleting the task <span className="fst-italic fw-bold">"{title}"</span> ?</p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-evenly">
          <Button
            size="lg"
            variant="danger"
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={onHide}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  );
}

export default ConfirmDeleteTask;
