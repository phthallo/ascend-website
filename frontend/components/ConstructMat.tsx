const ConstructMat = () => {
  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto mt-7 font-neuebit text-center flex flex-col items-center">
      <div className="block font-bettervcr text-[#de8af5] text-3xl text-left leading-none py-10">
        <div className="text-[#de8af5]">
          <select className=" focus:border-none leading-none text-2xl bg-[#00000000] w-80 text-left cursor-pointer border-none p-0">
            <option value="1">Rocket</option>
            <option value="2">Rover</option>
            <option value="3">Satellite</option>
          </select>
          <h3 className="text-xl mt-6">Materials</h3>
          <ul className="mt-4 text-sm">
            <li>
              <input type="checkbox" id="material1" />
              <label htmlFor="material1" className="ml-2">
                Material 1
              </label>
            </li>
            <li className="mt-2">
              <input type="checkbox" id="material2" />
              <label htmlFor="material2" className="ml-2">
                Material 2
              </label>
            </li>
            <li className="mt-2">
              <input type="checkbox" id="material3" />
              <label htmlFor="material3" className="ml-2">
                Material 3
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConstructMat;
