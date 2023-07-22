import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#A9907E]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl pl-2 sm:text-7xl font-bold text-black">
          Farhan Alwahid
        </h1>
        <h2 className="text-4xl pl-2 sm:text-7xl font-bold text-white">
          I&apos;m Front-End & Mobile Developer.
        </h2>
        <p className="text-[#333333] py-4 max-w-[700px]">
          I am a Front-End & Mobile developer with a focus on building
          exceptional digital experiences. I have a passion for crafting
          responsive web and mobile applications that aim to delight users.
          Occasionally, I also dabble in design to enhance the overall appeal of
          the projects I work on. My goal is to continuously learn and grow in
          my field while striving to create meaningful and user-friendly
          applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black rounded-md">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
