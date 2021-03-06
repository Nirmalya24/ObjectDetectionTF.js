import Navbar from "./Navbar";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-4">
        <Navbar AppName="FindThatObject" />
        <Hero
          AppName="FindThatObject"
          className="grid place-items-center h-screen"
        />
      </div>
    </div>
  );
};

export default Homepage;
