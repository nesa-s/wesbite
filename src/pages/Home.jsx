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
            <a href="/build" className="text-indigo-500 hover:font-bold transition-all duration-200">building</a> {" "}
            &{" "}
            <a href="/grow" className="text-indigo-500 hover:font-bold transition-all duration-200">growing</a> {" "}
            @ {" "}
            <a href="/umich" className="text-indigo-500 hover:font-bold transition-all duration-200">the University of Michigan</a>
          </>
        }
      />
      <div className="absolute top-6 left-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base animate-fade-in">
        <p> click on the purple text for more :)</p>
      </div>
      <div className="absolute bottom-6 left-6 animate-fade-in text-slate-700 dark:text-slate-300 text-sm sm:text-base transition-all duration-200">
        <p>
          reach me at: nesas
          <span className="font-semibold">[at]</span>
          umich
          <span className="font-semibold">[dot]</span>
          edu
        </p>
      </div>

      <div className="absolute top-6 right-6 flex gap-4 text-2xl text-slate-700 dark:text-slate-200">
  <a href="https://github.com/nesa-s" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
    <FiGithub />
  </a>
  <a href="https://linkedin.com/in/nesashamdasani/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
    <CiLinkedin />
  </a>
  <a href="https://open.spotify.com/user/by4hto07hdn817vgfbu1xahxv?si=5c20729922b14fd2" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
    <AiOutlineSpotify />
  </a>

</div>
    </div>
  );
}
  