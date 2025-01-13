import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
