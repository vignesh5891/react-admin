import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/login' component={Login} /> */}
        <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
