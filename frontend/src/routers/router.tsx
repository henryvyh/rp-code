import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTER_PATH } from "./router_path";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        {ROUTER_PATH.map((route, j: number) => (
          <Route
            key={j}
            exact={route.exact ?? true}
            path={`/${route.path}`}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
