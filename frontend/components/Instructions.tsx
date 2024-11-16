const Instructions = () => {
  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto mt-7 font-neuebit text-center flex flex-col items-center">
      <div className="block font-bettervcr text-[#de8af5] text-3xl text-center leading-none py-10">
        <div className="text-[#de8af5]">
          <select className=" appearance-none focus:outline-none leading-none text-xl bg-[#00000000] w-full text-left cursor-pointer focus:ring focus:border-[#de8af5]">
            <option value="1">Rocket</option>
            <option value="2">Rover</option>
            <option value="3">Sattelite</option>
          </select>
          <h3 className="text-lg">Materials</h3>
        </div>
        <div className="flex justify-center items-center rounded-2xl overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Instructions;
