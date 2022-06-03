import { Link } from "react-router-dom";
import RightArrowButton from "./RightArrowButton";

const Hero = (props) => {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            What if you could identify objects that are infront of you without
            thinking about it? Now you can with{" "}
            <span className="text-xl">{props.AppName}</span> !
          </p>
          <p className="py-6 text-2xl">Find what you're looking for, faster!</p>
          <Link to="/detect">
            <button class="btn btn-primary gap-2">
              Get Finding
              <RightArrowButton />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
