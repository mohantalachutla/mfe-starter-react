import { useDispatch, useSelector } from "react-redux";
import { MODAL_TYPES } from "../../constants";
import { hideModal } from "../../reducers/modal";
import { Modal } from "../base";

const GlobalModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state?.modal);
  const { display = false, type = MODAL_TYPES.DEFAULT } = modal;
  return (
    <Modal
      id="global-modal"
      show={display}
      onClose={() => dispatch(hideModal())}
      size="md"
    >
      {getModalByType(modal)}
    </Modal>
  );
};

const DefaultModal = ({ header, body, footer }) => {
  <div>
    {header && <Modal.Header>{header}</Modal.Header>}
    {body && <Modal.Body>{body}</Modal.Body>}
    {footer && <Modal.Footer>{footer}</Modal.Footer>}
  </div>;
};

const getModalByType = (modal) => {
  switch (modal.type) {
    //add more modals
    case MODAL_TYPES.DEFAULT:
    default:
      return <DefaultModal {...modal} />;
  }
};

export default GlobalModal;
