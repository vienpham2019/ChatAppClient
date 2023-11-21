import { Link } from "react-router-dom";
import AuthorizationBanner from "../../components/AuthorizationBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
const password_validation = [
  { content: "Must be at least 15 character long" },
  { content: "Must contain an upper and lowercase letter" },
  { content: "Must contain a number" },
  { content: "Must contain a special character (!,%,@,#,ect)" },
];
const Register = () => {
  const checkValidPassword = () =>
    password_validation.map((valid) => (
      <li className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faCheckDouble} />
        <span>{valid.content}</span>
      </li>
    ));
  return (
    <div className="grid gap-6 w-96 text-white p-5 animate-fade-in">
      <div>
        <h1 className="text-3xl font-light">Join us today!</h1>
        <span className="text-slate-300 font-thin">
          Sign up now to become a member
        </span>
      </div>

      <form className="grid gap-6">
        <div className="grid gap-4 font-extralight text-gray-400">
          <div className="flex gap-2">
            <div className="input-box">
              <input
                className="bg-transparent border border-gray-400 w-full"
                required
                type="text"
              />
              <span className="bg-slate-700">First name</span>
            </div>
            <div className="input-box">
              <input
                className="bg-transparent border border-gray-400 w-full"
                required
                type="text"
              />
              <span className="bg-slate-700">Last name</span>
            </div>
          </div>
          <div className="input-box">
            <input
              className="bg-transparent border border-gray-400 w-full"
              required
              type="email"
            />
            <span className="bg-slate-700">Email</span>
          </div>
          <div>
            <div className="input-box ">
              <input
                className="bg-transparent border border-gray-400 w-full"
                type="password"
                required
              />
              <span className="bg-slate-700">Password</span>
            </div>
            <div className="p-2 mx-2 text-sm rounded-lg text-slate-100">
              <ul>{checkValidPassword()}</ul>
            </div>
          </div>
          <div className="input-box ">
            <input
              className="bg-transparent border border-gray-400 w-full"
              type="password"
              required
            />
            <span className="bg-slate-700">Confirm Password</span>
          </div>
        </div>

        <button className="w-full border-cyan-600 py-2 rounded-full bg-cyan-700 hover:bg-cyan-800">
          Register
        </button>
      </form>
      <hr className="border-gray-500" />
      <div className="flex justify-between">
        <span className="text-gray-300 font-thin">Already have account?</span>
        <Link className="text-cyan-400" to={"/login"}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
