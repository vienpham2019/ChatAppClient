import { Link } from "react-router-dom";
import AuthorizationBanner from "../../components/AuthorizationBanner";

const Login = () => {
  return (
    <div className="bg-slate-900 flex justify-center items-center h-screen">
      <div
        className="flex gap-10 px-5 py-10 bg-slate-700 rounded-lg overflow-hidden "
        style={{ height: "40rem" }}
      >
        <div className="grid gap-6 w-96 text-white p-5 animate-fade-in">
          <div>
            <h1 className="text-3xl font-light">Welcome back!</h1>
            <h3 className="text-lg text-slate-400 font-thin">
              Log in to access your account
            </h3>
          </div>

          <form className="grid gap-6">
            <div className="grid gap-6 font-extralight text-gray-400">
              <div className="input-box">
                <input
                  className="bg-transparent border border-gray-400 w-full"
                  required
                  type="email"
                />
                <span className="bg-slate-700">Email</span>
              </div>
              <div className="input-box ">
                <input
                  className="bg-transparent border border-gray-400 w-full"
                  type="password"
                  required
                />
                <span className="bg-slate-700">Password</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <input className="cursor-pointer" type="checkbox" />
                  <span className="text-sm">Remember me</span>
                </div>
                <Link
                  className="text-cyan-400 font-normal"
                  to={"/reset_password"}
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button className="w-full border-cyan-600 py-2 rounded-full bg-cyan-700 hover:bg-cyan-800">
              Sign in
            </button>
          </form>
          <div className="flex items-center gap-3 font-extralight text-gray-400">
            <hr className="w-2 flex-1 border-gray-400" />
            <span>OR</span>
            <hr className="w-2 flex-1 border-gray-400" />
          </div>
          <button className="border border-gray-600 py-2 rounded-full bg-gray-700 hover:bg-gray-800">
            Sign in with google
          </button>
          <div className="flex justify-between">
            <span className="font-extralight text-gray-400">
              You don't have an account yet?
            </span>
            <Link className=" text-cyan-400" to={"/register"}>
              Register
            </Link>
          </div>
        </div>

        <AuthorizationBanner />
      </div>
    </div>
  );
};

export default Login;
