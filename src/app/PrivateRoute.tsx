import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export const PrivateRouter: FunctionComponent = () => {
  return <Outlet />;
};
