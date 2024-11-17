const Header = () => {
  return (
    <div className="bg-[#111f45] h-full w-full py-10 font-bettervcr">
      <div className=" grid grid-cols-6 divide-x-2 divide-[#de8af5] ">
        <h1 className="col-span-2 text-[#de8af5] text-3xl text-center pr-14 pl-10 leading-none">
          <a href="/">stellar blueprint</a>
        </h1>
        <a className="align-middle items-center col-span-1 text-[#de8af5] text-xl text-center leading-tight" href="./allitems">
          all materials
        </a>
        <a className="align-middle items-center col-span-1 text-[#de8af5] text-xl text-center leading-tight" href="./component">
          all components
        </a>
        <a className="align-middle items-center col-span-1 text-[#de8af5] text-xl text-center leading-tight" href="./construct">
          all constructs
        </a>
      </div>
    </div>
  );
};

export default Header;
