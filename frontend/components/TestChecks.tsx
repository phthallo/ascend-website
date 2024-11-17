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

  const getNextStepText = () => {
    const checkedCount = checked.filter(Boolean).length;
    if (checkedCount === 0) {
      return "Next step: Start the pre-check sequence.";
    } else if (checkedCount < checked.length) {
      return `Next step: Proceed to step ${checkedCount + 1}.`;
    } else {
      return "Next step: All systems go! Launch ready.";
    }
  };

  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto mt-5 font-neuebit text-center block space-x-4 items-center py-4 align-middle">
      {checked.map((isChecked, index) => (
        <input
          key={index}
          type="checkbox"
          className="w-5 h-5 rounded-full border-2 border-[#de8af5] appearance-none checked:bg-[#de8af5]"
          checked={isChecked}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
      <p className="font-bettervcr text-sm text-[#de8af5] text-center">{getNextStepText()}</p>
    </div>
  );
};

export default TestChecks;
