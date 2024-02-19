const routes = [
  {
    path: ["/", "/home"],
    // path: "/",
    exact: true,
    component: "Home",
  },
  {
    path: "/about",
    exact: true,
    component: "About",
  },
  {
    path: "/history",
    exact: true,
    component: "History",
  },
];

export default routes;
