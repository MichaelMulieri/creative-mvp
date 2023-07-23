import ReactDOM from "react-dom";
import ProjectPageNew from "../pages/ProjectPageNew";
import Backdrop from "./Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      {props.show && (
        <>
          <Backdrop onClick={props.onCancel} />
        </>
      )}
    </>
  );
};

export default Modal;
