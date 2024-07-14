import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

function ConfirmDeleteTask({ title, show, onHide }) {
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
          <Button className="" size="lg" variant="danger" onClick={onHide}>Delete</Button>
          <Button className="" size="lg" variant="secondary" onClick={onHide}>Cancel</Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  );
}

export default ConfirmDeleteTask;
