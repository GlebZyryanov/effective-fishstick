import React from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import { SHOP_ROUTE } from "../utils/consts";

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
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
