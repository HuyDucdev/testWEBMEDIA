import React from "react";

const LoadingTube = () => {
  return (
    <div className="flex flex-row gap-10 justify-start">
      <div className="w-12 h-44 relative  rounded-full overflow-hidden shadow-[0_0_10px_5px_black] before:w-12 before:h-40 before:absolute before:-bottom-40 before:animate-rise-up"></div>
      <div className="w-12 h-44 relative  rounded-full overflow-hidden shadow-[0_0_10px_5px_black] before:w-12 before:h-40 before:absolute before:-bottom-40 before:animate-rise-up-1"></div>
      <div className="w-12 h-44 relative  rounded-full overflow-hidden shadow-[0_0_10px_5px_black] before:w-12 before:h-40 before:absolute before:-bottom-40 before:animate-rise-up-2"></div>
      <div className="w-12 h-44 relative  rounded-full overflow-hidden shadow-[0_0_10px_5px_black] before:w-12 before:h-40 before:absolute before:-bottom-40 before:animate-rise-up-3"></div>
      <div className="w-12 h-44 relative  rounded-full overflow-hidden shadow-[0_0_10px_5px_black] before:w-12 before:h-40 before:absolute before:-bottom-40 before:animate-rise-up-4"></div>
    </div>
  );
};

export default LoadingTube;
