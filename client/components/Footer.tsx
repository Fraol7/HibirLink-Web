import { FaFacebookF, FaLinkedinIn , FaYoutube, FaTelegram  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="space-y-10 md:space-y-20">
        <div className="space-y-4">
          <h1 className="text-primary text-center text-3xl md:text-4xl font-bold mt-10 md:mt-40">Empowering businesses through trade</h1>
          <p className="text-center text-sm md:text-lg w-[90%] md:w-[60%] mx-auto">HibrLnk offers one-stop B2B trading solutions for global small and medium-sized 
            businesses, empowering them to transform through digital trade, grasp opportunities, and 
            accelerate growth contienentally.
          </p>
        </div>
        <div className="space-y-4 w-full flex flex-col items-center">
            <button className="text-white bg-primary py-3 px-5 w-fit rounded-2xl">Contact us</button>
            <div className="flex gap-x-3 w-fit">
              <FaFacebookF className="text-primary bg-transparent rounded-full p-2 hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-transform duration-300" size={35} />
              <FaLinkedinIn className="text-primary bg-transparent rounded-full p-2 hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-transform duration-300" size={35}/>
              <FaYoutube className="text-primary bg-transparent rounded-full p-2 hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-transform duration-300" size={35}/>
              <FaTelegram className="text-primary bg-transparent rounded-full p-2 hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-transform duration-300" size={35}/>
              <AiFillInstagram className="text-primary bg-transparent rounded-full p-2 hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-transform duration-300" size={35}/>
            </div>
        </div>
        <div className="relative w-full h-20 md:h-80">
          <svg
              className="absolute bottom-0 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#007bff"
                fillOpacity="0.7"
                d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,208C672,224,768,192,864,154.7C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path
                fill="#007bff"
                fillOpacity="0.5"
                d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,122.7L1440,107L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path
                fill="#007bff"
                fillOpacity="0.3"
                d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,176C672,171,768,149,864,160C960,171,1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div className="absolute bottom-0 w-full text-center text-white py-4">
                &copy;HibrLink 2024 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
