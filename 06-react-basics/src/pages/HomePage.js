import React from "react";
import { useHistory } from "react-router-dom";
import Counter from "../components/Counter";

function HomePage() {
  const history = useHistory();

  const goToUsersPage = () => history.push("/users");
  const goToItemsPage = () => history.push("/items");

  return (
    <div>
      <h2>HomePage</h2>

      <Counter />

      <button onClick={goToUsersPage}>Go to Users Page</button>
      <button onClick={goToItemsPage}>Go to Items Page</button>
    </div>
  );
}

export default HomePage;
