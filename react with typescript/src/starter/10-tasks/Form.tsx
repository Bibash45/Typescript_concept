import React, { useState } from "react";
import { type Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState("Enter a task here");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter some text");
      return;
    }
    // add to task
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form task-form">
      <input
        onChange={handleChange}
        value={text}
        type="text"
        className="form-input"
      />
      {/* {!text && <p style={{marginBottom:'10px',color:'red'}}>Please enter a task above</p>} */}
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
};

export default Form;
