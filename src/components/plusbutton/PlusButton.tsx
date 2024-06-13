const PlusButton = () => {
  return (
    <div className="ml-0">
      <div className="w-32 h-32 bg-black relative flex justify-center overflow-hidden items-center  border-4 group border-pink-600 z-30">
        <div className="w-44 h-80  bg-pink-600  -rotate-45 transform origin-top-left absolute right-8 -top-[150px] -z-20 group-hover:animate-triangle-scale animate-triangle-scale-back"></div>

        <span className="w-2 h-16 left-14  bg-white block absolute group-hover:animate-rotate-plus animate-rotate-plus-back"></span>
        <span className="w-16 h-2 top-14  bg-white block absolute group-hover:animate-rotate-plus animate-rotate-plus-back"></span>
      </div>
    </div>
  );
};

export default PlusButton;
