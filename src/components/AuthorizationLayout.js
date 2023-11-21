import { Outlet } from "react-router-dom";
import AuthorizationBanner from "./AuthorizationBanner";

const AuthorizationLayout = () => {
  return (
    <>
      <div className="bg-slate-900 flex justify-center items-center h-screen">
        <div
          className="flex gap-10 px-5 py-10 bg-slate-700 rounded-lg overflow-hidden "
          style={{ height: "40rem" }}
        >
          <Outlet />

          <AuthorizationBanner />
        </div>
      </div>
    </>
  );
};

export default AuthorizationLayout;
