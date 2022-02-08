import React, { lazy } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserAuthService from "../core/auth/service/UserAuthService";
import CartPage from "../views/dashboard/CartPage";
import Category from "../views/dashboard/Category";
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const ProductDetail = lazy(() => import("../views/dashboard/ProductDetail"));

const DashboardContainer = lazy(
  () => import("../views/dashboard/DashboardContainer")
);
const NotFound = lazy(() => import("../views/global/error/NotFound"));

const DashboardRouter: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <UserAuthService>
      <DashboardContainer>
        <Switch>
          <Route exact path={`${path}/`} component={Dashboard} />
          <Route exact path={`${path}/cart`} component={CartPage} />
          <Route exact path={`${path}/product/:id`} component={ProductDetail} />
          <Route exact path={`${path}/category/:id`} component={Category} />
          <Route
            exact
            path={`${path}/search/:query`}
            component={ProductDetail}
          />
          <Route exact path={`/*`}>
            <NotFound path={path} />
          </Route>
        </Switch>
      </DashboardContainer>
    </UserAuthService>
  );
};

export default DashboardRouter;
