import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>React Todo</h1>
      <button className={classes.header__button}>Create Task</button>
    </header>
  );
};

export default Header;
