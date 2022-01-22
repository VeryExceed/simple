import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import routes from "../core/routes";
import Home from "../components/Home";
import User from "../components/User";
import NotFound from "../components/NotFound";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">to Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">to User</NavLink>
        </li>
      </ul>

      <Switch>
        {/* 精确匹配路径*/}
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
