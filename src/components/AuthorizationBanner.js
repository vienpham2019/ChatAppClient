import bannerImage from "../images/banner.png";
const AuthorizationBanner = () => {
  return (
    <div className="hidden w-96 xl:block relative">
      <div
        style={{ height: "40em" }}
        className=" aspect-square grid items-center bg-cyan-800 rounded-ss-full -top-24 left-1 absolute"
      ></div>
      <img
        className="w-full absolute top-10"
        src={bannerImage}
        alt="banner image"
      />
    </div>
  );
};

export default AuthorizationBanner;
