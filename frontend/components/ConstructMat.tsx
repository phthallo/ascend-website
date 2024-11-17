import React, { useState } from "react";

const ConstructMat = () => {
  // State to hold selected option and materials
  const [selectedOption, setSelectedOption] = useState("1");
  const [materials, setMaterials] = useState(["5x Metal [001] ", "2x Bolts [003]", "3x Plastic [002]"]);

  // Material mapping based on selection
  const materialOptions = {
    "1": ["5x Metal [001] ", "2x Bolts [003]", "3x Plastic [002]"],
    "2": ["6x Metal [001]", "2x Bolts [003]"],
    "3": ["5x Metal [001]", "2x Bolts [003]", "3x Plastic [002]", "1x FibreGlass [005]"],
  };

  // Handle change in select option
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setMaterials(materialOptions[value]);
  };

  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto text-center flex flex-col items-center">
      <div className="block font-bettervcr text-[#de8af5] text-3xl text-left leading-none py-10">
        <div className="text-[#de8af5]">
          <select
            className="focus:border-none leading-none text-2xl bg-[#00000000] w-80 text-left cursor-pointer border-none p-0"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="1">Rocket</option>
            <option value="2">Rover</option>
            <option value="3">Satellite</option>
          </select>
          <h3 className="text-xl mt-6">Materials</h3>
          <ul className="mt-4 text-sm">
            {materials.map((material, index) => (
              <li key={index} className="mt-2">
                <input type="checkbox" id={`material${index}`} />
                <label htmlFor={`material${index}`} className="ml-2">
                  <a href = {`material/${index+1}`}>{material}</a>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConstructMat;
