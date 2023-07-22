import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Kotlin from '../assets/kotlin.png';
import AndroidStudio from '../assets/android-studio.png';
import Bootstrap from '../assets/bootstrap.png';
import Mysql from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#A9907E] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-black text-4xl font-bold inline border-b-4 border-white ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        {/* html */}
        <div className="text-white w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          {/* css */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          {/* javascript */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Javascript icon"/>
            <p className="my-4">JAVASCRIPT</p>
          </div>

          {/* react */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>

          {/* github */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>

          {/* tailwind  */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>

          {/* kotlin  */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Kotlin} alt="Kotlin icon" />
            <p className="my-4">KOTLIN</p>
          </div>

          {/* android studio  */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AndroidStudio} alt="Android Studio icon" />
            <p className="my-4">ANDROID STUDIO</p>
          </div>

          {/* bootstrap  */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="Bootstrap icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>

          {/* android studio  */}
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="Mysql icon" />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
