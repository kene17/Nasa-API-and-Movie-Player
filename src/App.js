import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nasa from "./pages/Nasa";
import IMDB from "./pages/IMDB";
import MainNavigation from "./Layout/MainNavigation";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/nasa">
            <Nasa />
          </Route>
          <Route path="/imdb">
            <IMDB />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
