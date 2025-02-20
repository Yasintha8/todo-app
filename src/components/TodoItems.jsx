import PropTypes from 'prop-types';
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2 bg-gray-50 p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div onClick={() => toggle(id)} className="flex items-center cursor-pointer flex-1">
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p className={`ml-4 text-lg font-medium transition-all duration-200 ${
          isComplete ? "line-through text-gray-400" : "text-gray-700"
        }`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-5 cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80"
      />
    </div>
  );
};

TodoItems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default TodoItems;
