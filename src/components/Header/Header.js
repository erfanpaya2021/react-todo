import { useDispatch } from "react-redux";

import { showModal } from "../../store/ui-slice";
import classes from "./Header.module.css";

const Header = ({ onShow }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(showModal("createTask"));
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>React Todo</h1>
      <button onClick={clickHandler} className={classes.header__button}>
        Create Task
      </button>
    </header>
  );
};

export default Header;
