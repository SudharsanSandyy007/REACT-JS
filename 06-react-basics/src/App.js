import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countSquare, setCountSquare] = useState(0);
  const [text, setText] = useState("");
  const [list, setList] = useState(() => {
    let items = localStorage.getItem("items");
    items = JSON.parse(items);
    if (items) return items;
    else return [];
  });

  // parametres:  1 - function , 2 - array(dependency)
  // compount mount
  useEffect(() => {
    console.log("hi");
    setCountSquare(count * count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const incCounter = () => setCount((prev) => prev + 1);
  const decCounter = () => setCount((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    const newList = [...list, text];
    setList(newList);
    setText("");
  };

  const handleDeleteItem = (item) => {
    setList((prev) => {
      return prev.filter((i) => i !== item);
    });
  };

  return (
    <div className="app">
      <h3>{count}</h3>
      <h3>{countSquare}</h3>
      <button onClick={incCounter}>Inc</button>
      <button onClick={decCounter}>Dec</button>
      <br />

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

      {list.map((item, index) => (
        <Item
          key={index}
          item={item}
          deleteItem={() => handleDeleteItem(item)}
        />
      ))}
    </div>
  );
}

export default App;
