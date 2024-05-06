import { FiCamera } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseRollingFill } from "react-icons/pi";

const heroItem = [
  {
    icons: <PiSuitcaseRollingFill className="size-6 lg:size-8" />,
    amount: "80,409",
    text: "travelers",
  },
  {
    icons: <FiCamera className="size-6 lg:size-8" />,
    amount: "862",
    text: "treasures",
  },
  {
    icons: <MdOutlineLocationOn className="size-6 lg:size-8" />,
    amount: "1,492",
    text: "cities",
  },
];

const HeroItem = () => {
  return (
    <>
      {heroItem.map((item, index) => (
        <div
          key={index}
          className="space-y-2 flex flex-col items-center sm:items-start justify-center">
          {item.icons}
          <p className="font-medium text-center">
            {item.amount}{" "}
            <span className="font-light text-gray-600">{item.text}</span>
          </p>
        </div>
      ))}
    </>
  );
};
export default HeroItem;
