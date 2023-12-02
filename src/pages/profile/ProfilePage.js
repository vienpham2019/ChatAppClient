import { PiPencil } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
const ProfilePage = () => {
  const background_url =
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg";
  const user_img = "https://i.pravatar.cc/300?img=47";
  return (
    <div className="grid">
      <div className="flex flex-col h-[17rem] justify-center items-center relative">
        <div
          className="w-[20rem] h-[10rem] bg-center bg-cover absolute top-0"
          style={{ backgroundImage: `url(${background_url})` }}
        >
          <div className="flex justify-between px-[1.3rem] py-[1rem] text-white font-bold">
            <span className="text-[1.2rem]">My profile</span>
            <div className="w-[1.8rem] aspect-square flex justify-center items-center cursor-pointer rounded-full bg-white text-black">
              <PiPencil />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[20rem] h-[6rem] absolute top-[8.5rem] text-center">
          <img
            className="w-[5rem] aspect-square rounded-full border-white border-[4px]"
            src={user_img}
            alt="profile"
          />
          <h3 className="font-bold">Adam Zampa</h3>
          <div className="flex justify-center items-center gap-[0.3rem] text-skin-muted">
            <MdOutlineLocationOn /> <p>San Fransisco, CA</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <h3 className="font-semibold">About</h3>
        <p className="text-gray-500 leading-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quod!
        </p>
      </div>
      <hr />
      <div className="p-5">
        <h3 className="font-semibold">Media</h3>
        <div className="border flex gap-[1rem]">
          <img
            className="w-[8rem] rounded-md"
            src="https://images.pexels.com/photos/8335926/pexels-photo-8335926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="media 1"
          />
          <img
            className="w-[8rem] rounded-md"
            src="https://images.pexels.com/photos/8335926/pexels-photo-8335926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="media 1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
