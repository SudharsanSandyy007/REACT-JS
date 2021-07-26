import { useDispatch, useSelector } from "react-redux";

function App() {
  const auth = useSelector((store) => store.auth); // gets value from store
  const list = useSelector((store) => store.list); // gets value from store

  const dispatch = useDispatch(); // sets value to store

  const loginUser = () => {
    dispatch({ type: "LOGIN", payload: "mani" });
  };

  const addItemToList = () => {
    dispatch({ type: "ADD", payload: Math.random() });
  };

  return (
    <div className="app">
      <h1>Hello React</h1>
      {auth && <h3>Logged in as {auth}</h3>}
      {!auth && <h3>NO User</h3>}

      <button onClick={loginUser}>Login</button>

      <button onClick={addItemToList}>ADD</button>

      {list.map((l) => (
        <div key={l}>{l}</div>
      ))}
    </div>
  );
}

export default App;
