import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./home/pages/home";
import MainHeader from "./shared/components/Navigation/MainHeader";
const App = () => {
  return (
    <Router>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </main>
    </Router>
  );
};

export default App;
