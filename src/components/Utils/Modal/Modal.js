import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

export default Modal;
