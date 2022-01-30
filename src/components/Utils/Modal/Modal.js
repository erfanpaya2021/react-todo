import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Overlay = () => {
  return <div className={classes.overlay}></div>;
};

const Modal = ({ children }) => {
  const root = document.getElementById("modal-root");
  return (
    <>
      {createPortal(<div className={classes.modal}>{children}</div>, root)}
      {createPortal(<Overlay />, root)}
    </>
  );
};

export default Modal;
