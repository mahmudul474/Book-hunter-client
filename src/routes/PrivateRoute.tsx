import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user,  isLoading } = useAppSelector((state) => state.user);

  const location = useLocation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  

if (user){
    return children;
}

return <Navigate to="/login" state={{from: location}} replace></Navigate>;
   
}
