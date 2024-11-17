const Home = () => {
  return (
    <>
      <div className="bg-[#111f45] h-screen w-full pb-6 font-bettervcr px-20 text-[#de8af5] block items-center align-middle text-center">
        <div className=" flex items-center align-middle text-center space-x-52 py-48">
          <h1 className="text-8xl leading-none">Stellar Blueprint</h1>
          <p className="text-4xl text-right leading-none">Build the next gen of space machinery with Stellar Blueprint</p>
        </div>
        <button className=" text-[#C382FE] text-3xl px-4 py-2 rounded-xl text-center bg-[#232D50] h-20 w-96">
          <a href="./buildspace"> Get Started</a>
        </button>
      </div>
    </>
  );
};
export default Home;
