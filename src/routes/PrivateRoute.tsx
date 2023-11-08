import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isError, isLoading } = useAppSelector((state) => state.user);

  const pathName = useLocation().pathname;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user && !isLoading) {
    return <Navigate to="/login" state={{ path: pathName }} />;
  }

  return <>{children}</>;
}
