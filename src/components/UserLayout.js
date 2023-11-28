import { Link, Outlet } from "react-router-dom";

import {
  PiChats,
  PiUserCircle,
  PiAddressBookLight,
  PiGear,
  PiLockKey,
  PiSignOutLight,
  PiBell,
  PiMoonLight,
  PiSunDimLight,
  PiGlobeLight,
  PiCheckBold,
} from "react-icons/pi";

import { useState } from "react";

const UserLayout = () => {
  const [activeTooltip, setActiveTooltip] = useState("Profile");
  const [profileModal, setProfileModal] = useState(false);
  const [themes, setThemes] = useState("light");

  const displayNavLinks = () => {
    const nav_links = [
      { link: "/user/profile", tooltip: "Profile" },
      { link: "/user/activites", tooltip: "Activites", badge: 12 },
      { link: "/user/chats", tooltip: "Chats", badge: 1 },
      { link: "/user/contacts", tooltip: "Contacts" },
      { link: "/user/setting", tooltip: "Setting" },
    ];
    return nav_links.map((l) => {
      let icon;
      let icon_class = "icon w-7 h-7 text-skin-muted";
      switch (l.tooltip) {
        case "Profile":
          icon = (
            <PiUserCircle
              className={icon_class}
              onClick={() => setActiveTooltip(l.tooltip)}
            />
          );
          break;
        case "Chats":
          icon = (
            <PiChats
              className={icon_class}
              onClick={() => setActiveTooltip(l.tooltip)}
            />
          );
          break;
        case "Activites":
          icon = (
            <PiBell
              className={icon_class}
              onClick={() => setActiveTooltip(l.tooltip)}
            />
          );
          break;
        case "Contacts":
          icon = (
            <PiAddressBookLight
              className={icon_class}
              onClick={() => setActiveTooltip(l.tooltip)}
            />
          );
          break;
        case "Setting":
          icon = (
            <PiGear
              className={icon_class}
              onClick={() => setActiveTooltip(l.tooltip)}
            />
          );
          break;
      }
      return (
        <Link
          to={l.link}
          key={l.link}
          className={`relative ${activeTooltip === l.tooltip && "nav-active"}`}
        >
          <div className="relative flex flex-col items-center">
            {icon}
            <small className="font-thin">{l.tooltip}</small>
            {l?.badge > 0 && (
              <div className="badge border-gray-800 bg-red-600">
                <p>{l.badge}</p>
              </div>
            )}
          </div>
        </Link>
      );
    });
  };

  const displayProfileModalLink = () => {
    const link_class =
      "py-2 px-4 hover:bg-skin-lm-fill-hover dark:hover:bg-skin-dm-fill-hover items-center flex justify-between";
    const icon_class = "scale-200";
    return (
      <>
        <Link className={link_class}>
          Profile <PiUserCircle className={icon_class} />
        </Link>
        <Link className={link_class}>
          Setting <PiGear className={icon_class} />
        </Link>
        <Link className={link_class}>
          Change Password <PiLockKey className={icon_class} />
        </Link>
        <hr />
        <Link className={link_class}>
          Log out <PiSignOutLight className={icon_class} />
        </Link>
      </>
    );
  };
  return (
    <div
      className="flex h-screen theme-red"
      onClick={() => profileModal && setProfileModal(false)}
    >
      <div className="w-20 bg-gray-800 flex flex-col justify-between text-skin-base py-14">
        <div className="grid gap-1 h-72 justify-center">
          {displayNavLinks()}
        </div>
        <div className="grid gap-5">
          <div className="flex flex-col items-center cursor-pointer">
            <PiMoonLight
              className={`w-8 h-8 text-skin-muted ${
                themes === "light" && "hidden"
              }`}
              onClick={() => setThemes("light")}
            />
            <PiSunDimLight
              className={`w-8 h-8 text-skin-muted ${
                themes === "dark" && "hidden"
              }`}
              onClick={() => setThemes("dark")}
            />
            <small className="font-thin capitalize">{themes} Mode</small>
          </div>
          <hr className="my-3 border-gray-500" />
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="badge border-gray-800 bg-lime-600">
                <PiCheckBold />
              </div>
              <img
                className="w-12 rounded-full border-2 cursor-pointer"
                src="https://i.pravatar.cc/300?img=47"
                alt="Profile"
                onClick={() => {
                  setProfileModal(!profileModal);
                  document.documentElement.classList.toggle("dark");
                }}
              />
            </div>
            <div
              className={`absolute left-3 bottom-14 rounded dark:bg-skin-dm-fill dark:text-skin-dm-base bg-skin-lm-fill text-skin-lm-base w-52  ${
                profileModal ? "grid" : "hidden"
              }`}
            >
              {displayProfileModalLink()}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
