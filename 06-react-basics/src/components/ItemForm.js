import React, { useRef, useState } from "react";

function ItemForm({ setList }) {
  const [text, setText] = useState("");
  const str = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = str.current.value;
    setList((prev) => {
      return [...prev, newItem];
    });
    str.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={str}
          type="text"
          // onChange={(e) => (str.current = e.target.value)}
          // value={str.current}
          placeholder="type something"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ItemForm;
