import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";
import { Header } from "../shared/Header";

export default function MainLayot() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
