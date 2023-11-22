import { Outlet } from "react-router-dom";
import bannerImage from "../images/banner.png";
const AuthorizationLayout = () => {
  return (
    <div className="bg-slate-900 flex justify-center items-center h-screen">
      <div
        className="flex gap-10 px-5 py-10 bg-slate-700 rounded-lg overflow-hidden "
        style={{ height: "40rem" }}
      >
        <Outlet />

        <div className="hidden w-96 xl:block relative">
          <div
            style={{ height: "50em" }}
            className=" aspect-square grid items-center bg-cyan-800 rounded-ss-full -top-40 left-1 absolute"
          ></div>
          <img
            className="w-full absolute top-10"
            src={bannerImage}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorizationLayout;
