const ConstructMat = () => {
  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto mt-7 font-neuebit text-center flex flex-col items-center">
      <div className="block font-bettervcr text-[#de8af5] text-3xl text-left leading-none py-10">
        <div className="text-[#de8af5]">
          <select className=" appearance-none focus:border-none leading-none text-2xl bg-[#00000000] w-80 text-left cursor-pointer border-none p-0">
            <option value="1">Rocket</option>
            <option value="2">Rover</option>
            <option value="3">Satellite</option>
          </select>
          <h3 className="text-xl mt-6">Materials</h3>
        </div>
      </div>
    </div>
  );
};

export default ConstructMat;
