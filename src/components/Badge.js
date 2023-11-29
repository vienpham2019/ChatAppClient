import { PiCheckBold, PiMinusBold, PiHourglassLight } from "react-icons/pi";
const Badge = ({ badge_val, type }) => {
  if (type === "notification" && (badge_val === undefined || badge_val === 0))
    return;
  if (type === "notification") {
    return (
      <div className="badge border-gray-800 bg-red-600">
        <p>{badge_val}</p>
      </div>
    );
  }
  let badge;
  let badge_class = "badge border-gray-800";
  if (type === "active") {
    badge = (
      <div className={`${badge_class} bg-lime-600`}>
        <PiCheckBold />
      </div>
    );
  } else if (type === "away") {
    badge = (
      <div className={`${badge_class} bg-yellow-600`}>
        <PiHourglassLight />
      </div>
    );
  } else if (type === "do not disturb") {
    badge = (
      <div className={`${badge_class} bg-red-500`}>
        <PiMinusBold />
      </div>
    );
  }
  return badge;
};

export default Badge;
