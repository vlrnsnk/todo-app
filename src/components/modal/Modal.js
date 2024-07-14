import Button from 'react-bootstrap/Button';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

function Modal({ title }) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <ModalDialog>
        <ModalHeader closeButton>
          <ModalTitle>Are You sure?</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Confirm deleting the task <span className="fst-italic fw-bold">"{title}"</span> ?</p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button className="w-25" size="lg" variant="danger">Delete</Button>
          <Button className="w-25" size="lg" variant="secondary">Cancel</Button>
        </ModalFooter>
      </ModalDialog>
    </div>
  );
}

export default Modal;
