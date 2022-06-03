import Navbar from "./Navbar";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div className="h-screen">
      <div class="container mx-auto px-4">
        <Navbar AppName="FindThatObject" />
        <Hero AppName="FindThatObject" />
      </div>
    </div>
  );
};

export default Homepage;
