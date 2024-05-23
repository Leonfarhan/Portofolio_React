import Pupuk from "../assets/projects/pupuk.png";
import Aljabar from "../assets/projects/aljabar.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#A9907E]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-black border-white">
            Work
          </p>
          <p className="py-6">
            Here are some of the projects that have been done.
          </p>
        </div>

        {/* container 1st */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 pb-12">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Pupuk})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
          </div>
          <div>
            {/* right description */}
            <div className="text-black text-lg">
            Design and develop a web application for image recognition and verification of ID cards and fertilizer bags using a machine learning model at PT Pupuk Indonesia
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            {/* left description */}
            <div className="text-black text-lg">
            Comparison of Rotation Matrix and Quaternion in 3D Object Rotation Representation in Three.js Based Web Application
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Aljabar})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Work;


