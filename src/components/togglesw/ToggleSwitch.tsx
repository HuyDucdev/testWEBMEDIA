import React from "react";
import cloud1 from "../../assets/img/cloud1.png";
import sup from "../../assets/img/superman.png";

const ToggleSwitch = () => {
  const [isClick, setIsClick] = React.useState<boolean>(false);

  return (
    <div className="flex justify-center mt-4">
      <div
        onClick={() => {
          setIsClick(!isClick);
          console.log(isClick);
        }}
        className={`relative w-60 h-24 rounded-full overflow-hidden duration-2000 ${
          isClick
            ? "shadow-[0_0_100px_1px_pink] bg-[#BBE6FE]"
            : "shadow-[0_0_100px_1px_black] bg-black"
        }`}
      >
        <div className="">
          <img
            className={` absolute top-10  duration-2000 transform w-48 ${
              isClick ? "translate-x-28" : "translate-y-40"
            }`}
            src={cloud1}
            alt="asfdjhasdfhjk"
          />
          <img
            className={` absolute top-5 w-24 -left-24 ${
              isClick ? "animate-cloud-fly" : "w-0 h-0"
            }`}
            src={sup}
            alt="asfdjhasdfhjk"
          />
        </div>
        <div
          className={`absolute top-4 left-3 h-16 w-16 rounded-full duration-2000 ${
            isClick
              ? "bg-[#fbe1ab] shadow-[0_0_25px_30px_#FADE9C]"
              : " bg-white translate-x-36 scale-125 shadow-[0_0_20px_10px_white]"
          }`}
        >
          <div
            className={`duration-2000 rounded-[50%] shadow-[0_0_10px_1px_gray] blur-[2px] bg-[#B7BCBB] absolute top-5 left-2 ${
              isClick ? "w-0 h-0" : "w-3 h-5"
            }`}
          ></div>
          <div
            className={`duration-2000 rounded-full shadow-[0_0_10px_1px_gray] blur-[2px] bg-[#B7BCBB] absolute bottom-2 right-5 ${
              isClick ? "w-0 h-0" : "w-2 h-2"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
