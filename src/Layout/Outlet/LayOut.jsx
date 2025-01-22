import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav></Nav>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
