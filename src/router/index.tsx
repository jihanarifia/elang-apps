import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import { About, History, Home } from "src/pages";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {/* {routes.map((routeItem) => {
          return (
            <Route
              // key={routeItem.component}
              path={routeItem.path}
              // exact={routeItem.exact}
              element={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
      {/* Users/jihanramadhanti/Documents/jihan/elang-apps/src/pages/About/index
      /Users/jihanramadhanti/Documents/jihan/elang-apps/src/pages/About/index.tsx */}
    </Suspense>
  );
};

export default Router;
