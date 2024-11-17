import Header from "@components/Header";
import ConstructMat from "@components/ConstructMat";
import Instructions from "@components/Instructions";
import TestChecks from "@components/TestChecks";



const Home = () => {
  return (
    <div className="bg-[#111f45] h-full w-full pb-6 overflow-y-hidden">
      <Header />
      <div className="grid grid-cols-9">
        <div className="col-span-3">
          <ConstructMat />
          <Instructions />
          <TestChecks />
          </div>
          <div className="col-span-6 mr-20">
          <img className = "mx-auto w-max h-full object-cover rounded-xl bg-[#232d50]" src = "./satellite/satelliteDish1.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
