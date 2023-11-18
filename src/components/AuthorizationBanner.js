import bannerImage from "../images/banner.png";
const AuthorizationBanner = () => {
  return (
    <div className="hidden w-96 xl:block relative">
      <div
        style={{ height: "50em" }}
        className=" aspect-square grid items-center bg-cyan-800 rounded-ss-full -top-40 left-1 absolute"
      ></div>
      <img className="w-full absolute top-10" src={bannerImage} alt="banner" />
    </div>
  );
};

export default AuthorizationBanner;
