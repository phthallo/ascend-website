const AllItems = () => {
  return (
    <div className="bg-[#111f45] h-full text-[#de8af5] block items-center align-middle text-center py-20">
      <table className="table-auto align-middle items-center">
        <thead>
          <tr>
            <th className="text-3xl px-5">Song</th>
            <th className="text-3xl px-5">Artist</th>
            <th className="text-3xl px-5">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllItems;
