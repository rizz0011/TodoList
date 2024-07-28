import React, { useState } from "react";
import "./index.css";
import { FaTrash } from "react-icons/fa";
//
import { Calender } from "react-calender-custom-opt";

function TodoList() {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleAdd = (e) => {
    if (!input) {
      alert("Please enter input field!");
      return;
    }
    e.preventDefault();
    setData([...data, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    console.log(index);
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  console.log(data);

  const handleDone = () => {
    console.log("done");
  };

  return (
    <>
      <div className="main">
        <div className="todo">
          <div className="title">
            <h3>What's the Plan for Today?</h3>
            <p>Add Your Plan Here</p>
          </div>

          <div className="calender">
            <Calender
              duration="month"
              direction="row"
              height={80}
              width={80}
              color="royalblue"
              background="skyblue"
            />
          </div>

          <div className="input-field">
            <input
              value={input}
              onChange={handleChange}
              placeholder="what will you do today?"
            />
            <button onClick={handleAdd}>Add</button>
          </div>

          <div className="displayList">
            {data &&
              data.map((i, index) => (
                <li key={index} id={index}>
                  {" "}
                  <input type="checkbox" onClick={handleDone} />
                  {i}{" "}
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
