import React, { useState } from "react";
import Todo from "./Todo";

const Todolist = ({
  countDownColor,
  setInputText,
  inputText,
  setTodos,
  todos,
}) => {
  const [dp, setDp] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  };
  return (
    <div className="md:mx-auto md:w-3/6">
      <div className="flex justify-between mx-5">
        <span className="text-white">Tasks</span>
        <button
          className={`w-8 h-8 border-solid border-1 rounded ${countDownColor} text-white mx-1`}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <Todo inputText={inputText} setInputText={setInputText} todo={todo} key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
      <div>
        {dp && (
          <div className="md:ml-40 my-10 mx-5 rounded bg-white">
            <input
              value={inputText}
              onChange={inputTextHandler}
              className="font-semibold font-sans appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="What are you working on?"
            />
            <div className=" mb-10 flex justify-end h-9 bg-gray-200">
              <button
                onClick={() => setDp(!dp)}
                className=" text-gray font-semibold py-2 px-4 rounded"
                type="reset"
              >
                Cancel
              </button>
              <button
                onClick={saveHandler}
                className="shadow bg-gray-400 hover:bg-gray-200 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        )}
        <div>
          <button
            onClick={() => setDp(!dp)}
            className={`${
              dp ? "hidden" : ""
            } text-base font-bold font-sans text-white ${countDownColor} my-5 mx-5 border-dashed border-2 w-80 h-14 md:ml-36 md:w-96 md:h-16`}
          >
            <i class="fa-solid fa-circle-plus"></i> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
