import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
      </main>
    </Router>
  );
};

export default App;
