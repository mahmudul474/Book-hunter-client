import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";
import { Header } from "../shared/Header";
import { useAppDispatch } from "../redux/hook";
import { useEffect } from "react";
import { setLoading, setUser } from "../redux/featured/user/registrationSlice";
import { auth } from "../lib/firbase";
import { onAuthStateChanged } from "firebase/auth";

export default function MainLayot() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
