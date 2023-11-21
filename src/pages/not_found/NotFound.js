import notfoundimg from "../../images/pagenotfound.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col items-center gap-5 text-center px-2">
        <img
          className="w-64 md:w-96 "
          src={notfoundimg}
          alt="not found image"
        />
        <span className="text-base tracking-tight uppercase md:text-2xl">
          oops, sorry we can't find that page
        </span>
        <span className="text-slate-500 ">
          Either something went wrong or the page doesn't exist anymore.
        </span>
        <Link
          to={"/login"}
          className="border text-center text-slate-200 rounded bg-cyan-600 w-40 py-2 hover:bg-cyan-800"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
