import Header from "@components/Header";
import ConstructMat from "@components/ConstructMat";
import Instructions from "@components/Instructions";
import TestChecks from "@components/TestChecks";

const Home = () => {
  return (
    <div className="bg-[#111f45] h-full pb-6 overflow-y-hidden">
      <Header />

      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <ConstructMat />
          <Instructions />
          <TestChecks />
        </div>
      </div>
    </div>
  );
};

export default Home;
