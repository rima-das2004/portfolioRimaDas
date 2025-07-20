import React from "react";
import { Outlet } from "react-router-dom";
import Navlink from "./Navlink";

export default function Layout() {
  return (
    <>
      <Navlink />
      <Outlet />
    </>
  );
}
