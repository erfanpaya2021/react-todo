import TrashIcon from "../Utils/Icons/TrashIcon";
import EditIcon from "../Utils/Icons/EditIcon";

const colors = [
  {
    primaryColor: "#5D93E1",
    secondaryColor: "#ECF3FC",
  },
  {
    primaryColor: "#F9D288",
    secondaryColor: "#FEFAF1",
  },
  {
    primaryColor: "#5DC250",
    secondaryColor: "#F2FAF1",
  },
  {
    primaryColor: "#F48687",
    secondaryColor: "#FDF1F1",
  },
  {
    primaryColor: "#B964F7",
    secondaryColor: "#F3F0FD",
  },
];

const SingleTodo = ({ taskObj, index }) => {
  const selectedColor = colors[index % 5];
  console.log(selectedColor);

  return (
    <li className="todo" style={{ borderTopColor: selectedColor.primaryColor }}>
      <h3
        className="todo__title"
        style={{ backgroundColor: selectedColor.secondaryColor }}
      >
        {taskObj.title}
      </h3>
      <p className="todo__description">{taskObj.description}</p>
      <div
        className="todo__actions"
        style={{ color: selectedColor.primaryColor }}
      >
        <span>
          <TrashIcon />
        </span>
        <span>
          <EditIcon />
        </span>
      </div>
    </li>
  );
};

export default SingleTodo;
