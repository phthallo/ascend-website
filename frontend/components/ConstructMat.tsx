import { useEffect, useState } from "react";

const dir = {
  "1": "Metal",
  "2": "Plastic",
  "3": "Bolts",
  "4": "Nuts",
  "5": "Fiberglass",
  "6": "Carbon fiber",
};
const ConstructMat = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const fetchData = async (value) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/construct/${value}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log(result.requires);
      setData(Object.keys(result.requires).map((key) => [key, result.requires[key]])); // Store the fetched data
    } catch (err) {
      setError("Failed to fetch data"); // Handle any errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // useEffect hook to fetch data when the selected value changes or when the component mounts
  useEffect(() => {
    fetchData(selectedValue); // Fetch data for the selected value (initially 'Rocket')
  }, []); // Empty dependency array means it runs only once when the component mounts

  // useEffect hook to fetch data whenever the selected value changes
  useEffect(() => {
    fetchData(selectedValue); // Fetch data every time selectedValue changes
  }, [selectedValue]); // This runs when selectedValue changes

  return (
    <div className="bg-[#232D50] rounded-2xl mx-10 h-auto text-center flex flex-col items-center">
      <div className="block font-bettervcr text-[#de8af5] text-3xl text-left leading-none py-10">
        <div className="text-[#de8af5]">
          <select
            onChange={handleDropdownChange}
            value={selectedValue}
            className=" focus:border-none leading-none text-2xl bg-[#00000000] w-80 text-left cursor-pointer border-none p-0"
          >
            <option value="1">Rocket</option>
            <option value="2">Satellite</option>
            <option value="3">Rover</option>
          </select>
          <h3 className="text-xl mt-6">Materials</h3>
          <ul className="mt-4 text-sm">
            {data
              ? data.map((dat) => (
                  <li className="mt-2">
                    <input type="checkbox" />
                    <label htmlFor="material1" className="ml-2">
                      <a href={`/material/${dat[0][0]}`}> {`${String(dat)[2]}x ${dir[String(dat)[0][0]]} (ID [${String(dat)[0][0]}])`} </a>
                    </label>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConstructMat;
