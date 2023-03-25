import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoading from "../pages/PageLoading";
import Page404 from "../pages/Page404";
import { PATH_CONTACT, PATH_HOME, PATH_PRODUCTS } from "../consts/routes";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Contact = lazy(() => import("../pages/Contact"));

const Router = () => {
  return (
    <Routes>
      <Route
        path={PATH_HOME}
        element={
          <Suspense fallback={<PageLoading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={PATH_PRODUCTS}
        element={
          <Suspense fallback={<PageLoading />}>
            <Products />
          </Suspense>
        }
      />
      <Route
        path={PATH_CONTACT}
        element={
          <Suspense fallback={<PageLoading />}>
            <Contact />
          </Suspense>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
