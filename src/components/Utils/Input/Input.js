import classes from "./Input.module.css";

const Input = ({ input, label }) => {
  return (
    <div className={classes.input}>
      <label
        htmlFor={input.id}
        className={input.value.trim() !== "" ? classes.filled : ""}
      >
        {label}
      </label>
      <input {...input} />
      <div></div>
    </div>
  );
};

export default Input;
