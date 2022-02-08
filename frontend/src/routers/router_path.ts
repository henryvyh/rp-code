import React, { lazy } from "react";

const ErrorPage = lazy(() => import("../views/global/error/ErrorPage"));
const SignIn = lazy(() => import("../views/signin/SignIn"));
const DashboardRouter = lazy(() => import("./DashboardRouter"));
const NotFound = lazy(() => import("../views/global/error/NotFound"));
interface Props {
  path: string;
  component: React.LazyExoticComponent<React.FC<{}>>;
  exact?: boolean;
}
export const ROUTER_PATH = [
  {
    path: "404",
    component: NotFound,
  },
  {
    path: "",
    component: SignIn,
  },
  {
    path: "signin",
    component: SignIn,
  },
  {
    path: "dashboard",
    component: DashboardRouter,
    exact: false,
  },
  {
    path: "*",
    component: NotFound,
  },
] as Props[];
