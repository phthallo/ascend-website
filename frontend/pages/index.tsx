import Header from "@components/Header";
import ConstructMat from "@components/ConstructMat";
import Instructions from "@components/Instructions";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <ConstructMat />
          <Instructions />
        </div>
      </div>
    </div>
  );
};

export default Home;
