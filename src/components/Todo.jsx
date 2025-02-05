import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-gradient-to-r from-gray-200 to-blue-400 w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl shadow-lg ">
        {/* ------------Title------------- */}
        <div className="flex items-center mt-4 gap-2">
          <img className="w-10" src={todo_icon} alt="todo icon" />
          <h1 className="text-3xl font-bold text-gray-700">To-Do List</h1>
        </div>

        {/* ------------Input Box------------- */}
        <div className="flex items-center my-6 bg-gray-100 rounded-full shadow-sm">
          <input
            ref={inputRef}
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-lg text-gray-700 placeholder:text-gray-500"
            type="text"
            placeholder="Add your task..."
          />
          <button
            onClick={add}
             className="border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium transition-all duration-300 hover:bg-blue-700 active:scale-95 ml-4"
          >
            ADD +
          </button>
        </div>

        {/* ------------Todo List------------- */}
        <div className="mt-2 space-y-3">
          {todoList.map((item) => (
            <TodoItems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
