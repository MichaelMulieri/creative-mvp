import ReactDOM from "react-dom";
import ProjectPageNew from "../pages/ProjectPageNew";

import "./Backdrop.css";

const ModalOverlay = (props) => {
  return (
    <div onClick={(event) => event.stopPropagation()}>
      <div className="modal">
        <ProjectPageNew scrambledWords={props.scrambledWords} />
      </div>
      <footer>{props.footer}</footer>
    </div>
  );
};

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" id="modal-hook" onClick={props.onClick}>
      <ModalOverlay />
    </div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
