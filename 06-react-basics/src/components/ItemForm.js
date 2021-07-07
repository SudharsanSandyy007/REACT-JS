import React, { useState } from "react";

function ItemForm({ setList }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setList((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="type something"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ItemForm;
