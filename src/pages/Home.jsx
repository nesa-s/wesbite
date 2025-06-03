import { BackgroundPaths } from "@/components/ui/background-paths";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <BackgroundPaths 
        title="nesa shamdasani" 
        subheading={
          <>
            currently {" "}
            <a href="/learn" className="text-indigo-500 hover:font-bold transition-all duration-200">learning</a>,{" "}
            <a href="/build" className="text-indigo-500 hover:font-bold transition-all duration-200">building</a>, and{" "}
            <a href="/grow" className="text-indigo-500 hover:font-bold transition-all duration-200">growing</a>{" "}
            @ <a href="/umich" className="text-indigo-500 hover:font-bold transition-all duration-200">the University of Michigan</a>
          </>
        }
      />
      <div className="absolute top-6 right-6 flex gap-4 text-2xl text-slate-700 dark:text-slate-200">
  <a href="https://github.com/nesa-s" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/nesashamdasani/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
    <FaLinkedin />
  </a>
  <a href="https://open.spotify.com/user/by4hto07hdn817vgfbu1xahxv?si=5c20729922b14fd2" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
    <FaSpotify />
  </a>
</div>
    </div>
  );
}
  