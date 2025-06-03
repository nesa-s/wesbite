import { BackgroundPaths } from "@/components/ui/background-paths";

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
    </div>
  );
}
  