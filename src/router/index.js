import NoMatch from "@containers/NoMatch";
import HomePage from "@containers/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
    breadcrumbName: "HomePage",
  },
  {
    path: "*",
    component: NoMatch,
    exact: true,
  },
];

export default routes;
