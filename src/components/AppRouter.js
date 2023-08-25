import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
