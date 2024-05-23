import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";
import CV from "../assets/cv.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#A9907E] text-white">
      <div>
        <img src={Logo} alt="logo image" style={{ width: "35px" }} />
      </div>

      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#A9907E] flex flex-col justify-center items-center"
        }>
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link tonClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* sosmed */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between rounded-tr-full rounded-br-full items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/farhan-alwahid-17a379153?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bs1vFGI8RUmvF0ZBcNF16w%3D%3D"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <ul>
          {/* Github */}
          <li className="w-[160px] h-[60px] flex justify-between rounded-tr-full rounded-br-full items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/Leonfarhan"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
        <ul>
          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between rounded-tr-full rounded-br-full items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:farhanalwahid10@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
        <ul>
          {/* CV */}
          <li className="w-[160px] h-[60px] flex justify-between rounded-tr-full rounded-br-full items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href={CV}
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
