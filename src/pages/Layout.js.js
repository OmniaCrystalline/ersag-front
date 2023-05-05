/** @format */

import { Header } from "../components/Header/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
