
import "./Modal.css";
import { Modal } from "react-bootstrap";

const ReusableModal = ({ show, onHide, children, size }) => {

  return (
    <Modal
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default ReusableModal;
