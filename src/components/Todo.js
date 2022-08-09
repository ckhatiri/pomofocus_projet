import React, { useState } from "react";

const Todo = ({ inputText, setInputText, text, todos, todo, setTodos }) => {
  const [hide, setHide] = useState(false);
  //functions:
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const updateHandler = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div>
      <div className="border-l-4 border-l-black rounded flex my-3 mx-5 justify-between bg-white ">
        <div className="flex">
          <button className="m-2 text-gray-400 " type="">
            <i class="fa-solid fa-circle-check"></i>
          </button>
          <li className={`my-2.5`}>{text}</li>
        </div>
        <button
          onClick={() => setHide(!hide)}
          className={`w-8 h-8 text-gray-400 border-solid border-1 border rounded m-2`}
          type=""
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      {hide && (
        <div className="md:ml-40 my-10 mx-5 rounded bg-white">
          <input
            value={inputText}
            className="font-semibold font-sans appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="What are you working on?"
          />

          <div className=" mb-10 flex justify-end h-9 bg-gray-200">
            <button
              onClick={deleteHandler}
              className="mr-28 text-gray font-semibold h-7 pt-1"
              type=""
            >
              delete
            </button>
            <button
              onClick={() => setHide(!hide)}
              className=" text-gray font-semibold h-7 pt-1 px-4"
              type="reset"
            >
              Cancel
            </button>
            <button
              onClick={updateHandler}
              className="shadow bg-gray-400  text-white font-semibold h-7 pb-1 px-4 mr-2 mt-1 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
