import { useEffect, useState } from "react";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import Users from "./components/Users";
import "./styles/App.css";

function App() {
  const [list, setList] = useState(() => {
    let items = localStorage.getItem("items");
    items = JSON.parse(items);
    if (items) return [...items];
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const handleDeleteItem = (item) => {
    setList((prev) => {
      return prev.filter((i) => i !== item);
    });
  };

  return (
    <div className="app">
      <ItemForm setList={setList} />
      {list.map((item, index) => (
        <Item
          key={index}
          item={item}
          deleteItem={() => handleDeleteItem(item)}
        />
      ))}

      <Users />
    </div>
  );
}

export default App;
