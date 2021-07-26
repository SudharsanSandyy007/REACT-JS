import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import ItemsPage from "./pages/ItemsPage";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/items" component={ItemsPage} />

          <Route exact path="/users">
            <UserPage />
          </Route>

          <Route path="/users/:username">
            <UsersPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
