import React, { useState, useEffect, useRef } from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmt = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput(' ');
  };

  return (
    <form onSubmit={handleSubmt} className="form-todo">
      {props.edit ? (
        <>
          <input
            //type="text"
            placeholder="Upadte tou tod"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmt} className="todo-button edit">
            Upadte
          </button>
        </>
      ) : (
        <>
          <input
            //type="text"
            placeholder="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmt} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
