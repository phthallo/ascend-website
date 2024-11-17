import { useState } from "react";

const TestChecks = () => {
  const [checked, setChecked] = useState<boolean[]>(Array(7).fill(false));

  const handleCheckboxChange = (index: number) => {
    if (index === 0 || checked[index - 1]) {
      const newChecked = [...checked];
      newChecked[index] = !newChecked[index];
      setChecked(newChecked);
    }
  };

  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto mt-7 font-neuebit text-center block space-x-4 items-center py-4  align-middle">
      {checked.map((isChecked, index) => (
        <input
          key={index}
          type="checkbox"
          className="w-5 h-5 rounded-full border-2 border-[#de8af5] appearance-none checked:bg-[#de8af5]"
          checked={isChecked}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
      <p className="font-bettervcr text-sm text-[#de8af5] text-center">Next step : Dont explode rocket pls</p>
    </div>
  );
};

export default TestChecks;
