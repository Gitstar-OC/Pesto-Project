import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Notes App</title>
      </Helmet>
      <div className="bg-welcomeLight dark:bg-welcomeDark h-[80vh] bg-fixed bg-cover flex flex-col justify-center p-10 mx-20">
        <div className="text-[96px] font-mr">
          Welcome
        </div>
        <div className="flex justify-start space-x-16 mt-4">
          <Button
            variant="outline"
            className="WelcomeButton"
          >
            <Link to="/Home" className="WelcomeLink">
              <GiNotebook />
              <span>Start Taking Notes</span>
              <FaLongArrowAltRight/>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="WelcomeButton "
          >
            <a
              href="https://github.com/Gitstar-OC/Pesto-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="WelcomeLink"
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
