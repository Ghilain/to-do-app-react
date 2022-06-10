import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo(props) {
  const [inputText, setInputText] = useState({
    title: '',
    addTodoProps: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);// eslint-disable-line
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');// eslint-disable-line
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

export default InputTodo;
