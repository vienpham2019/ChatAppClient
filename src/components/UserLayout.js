import { Link, Outlet } from "react-router-dom";

import {
  PiChats,
  PiUserCircle,
  PiAddressBookLight,
  PiGear,
  PiLockKey,
  PiSignOutLight,
  PiBell,
} from "react-icons/pi";

import { useState } from "react";

const UserLayout = () => {
  const [activeTooltip, setActiveTooltip] = useState("Profile");
  const [profileModal, setProfileModal] = useState(false);

  const displayNavLinks = () => {
    const nav_links = [
      { link: "/user/profile", tooltip: "Profile", badge: 1 },
      { link: "/user/activites", tooltip: "Activites", badge: 12 },
      { link: "/user/chats", tooltip: "Chats", badge: 0 },
      { link: "/user/contacts", tooltip: "Contacts", badge: 2 },
      { link: "/user/setting", tooltip: "Setting" },
    ];
    return nav_links.map((l) => {
      let icon;
      let icon_class = "icon w-7 h-7 text-slate-400 tooltip-pointer";
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
          className={`relative ${activeTooltip === l.tooltip && "nav-active"}`}
        >
          {icon}
          <div className="tooltip tooltip-left top-2 left-10">{l.tooltip}</div>
          {l?.badge > 0 && (
            <div className="badge border-gray-800 bg-red-600">
              <p>{l.badge}</p>
            </div>
          )}
        </Link>
      );
    });
  };

  const displayProfileModalLink = () => {
    const link_class =
      "py-2 px-4 hover:bg-gray-200 items-center flex justify-between";
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
      className="flex h-screen"
      onClick={(e) => profileModal && setProfileModal(false)}
    >
      <div className="w-20 bg-gray-800 grid justify-center text-white py-14">
        <div className="grid gap-1 h-72 justify-center">
          {displayNavLinks()}
        </div>
        <div className="grid items-end gap-1 relative">
          <img
            className="w-12 rounded-full border-2 cursor-pointer"
            src="https://i.pravatar.cc/300?img=47"
            alt="Profile"
            onClick={() => setProfileModal(!profileModal)}
          />
          <div
            className={`absolute bottom-14 rounded bg-white text-black w-52 border ${
              profileModal ? "grid" : "hidden"
            }`}
          >
            {displayProfileModalLink()}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
