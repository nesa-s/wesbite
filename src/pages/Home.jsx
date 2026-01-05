import { BackgroundPaths } from "@/components/ui/background-paths";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineSpotify } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <BackgroundPaths 
        title="nesa shamdasani" 
        subheading={
          <>
            <a href="/build" className="indigo-link">building</a> {" "}
            &{" "}
            <a href="/grow" className="indigo-link">growing</a> {" "}
            @ {" "}
            <a href="/umich" className="indigo-link">the University of Michigan</a>
          </>
        }
      />
      <div className="top-left-text">
        <p> click on the purple text for more :)</p>
      </div>
      <div className="bottom-left-text">
        <p>
          reach me at: nesas
          <span className="font-semibold">[at]</span>
          umich
          <span className="font-semibold">[dot]</span>
          edu
        </p>
      </div>

      <div className="social-icons-container">
        <a 
          href="https://github.com/nesa-s" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black dark:hover:text-white"
        >
          <FiGithub />
        </a>
        <a 
          href="https://linkedin.com/in/nesashamdasani/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          <CiLinkedin />
        </a>
        <a 
          href="https://open.spotify.com/user/by4hto07hdn817vgfbu1xahxv?si=5c20729922b14fd2" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-green-500"
        >
          <AiOutlineSpotify />
        </a>
      </div>
    </div>
  );
}
  