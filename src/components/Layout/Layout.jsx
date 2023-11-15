import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../../App";
import Login from "../Pages/auth/LoginRegist";

function Layout() {
  return (
    <div>
      <header className="flex w-full flex-col ">
        <Tabs aria-label="Dynamic tabs">
          <Tab id="/chats" title="Чаты "></Tab>
          <Tab title="Войти " id="/login" href="/login"></Tab>
        </Tabs>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
