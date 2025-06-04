import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100  max-w-4xl px-6 sm:px-12">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link to="/" className="text-sm text-blue-500 hover:underline">&larr; Back to homepage</Link>

        <div>
          <h1 className="text-4xl font-bold">Food for thought</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
          Biomedical innovation, AI-enhanced medical devices, ethical tech design, and human-machine interfaces.
          </p>
        </div>
        <hr className="border-slate-300 dark:border-slate-600 mb-8" />


        <div>
          <h2 className="text-2xl font-semibold mb-2">Currently diving into:</h2>
          <div className="space-y-1">
            <div>EECS 203: Discrete Mathematics</div>
            <div>EECS 280: Programming and Intro Data Structures</div>
            <div>EECS 281: Data Structures and Algorithms</div>
            <div>EECS 370: Computer Organization</div>
            <div>Piano 110: Beginning Piano</div>
            <div>ENTR 407: Entrepreneurship Hour with Center for Entrepreneurship</div>
          </div>
        </div>

        <hr className="border-slate-300 dark:border-slate-600 mb-8" />

        <div>
          <h2 className="text-2xl font-semibold mb-2">On my list next:</h2>
          <div className="space-y-3">
            <div>
              <a
              href="https://team.mhacks.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
              >
              M-Hacks
              </a>{" "}
              <span className="text-slate-600 dark:text-slate-300">• Outreach & HackerX</span>{" "}
              <span className="italic text-slate-500 dark:text-slate-400">
                — University of Michigan's largest hackathon organization
              </span>
            </div>
            <div>
                <a
                href="https://sites.lsa.umich.edu/mpmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
                >
                Plant Microbe Interaction Lab
                </a>{" "}
              <span className="italic text-slate-500 dark:text-slate-400">
                — Working on virus vector-based delivery system for CRISPR/Cas9 components to produce genetically modified cotton plants
              </span>
            </div>
        <div>
            <a
            href="https://v1michigan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
            >
            V1
           </a>{" "}
           <span className="text-slate-600 dark:text-slate-300">• W25 Product Studio</span>{" "}
           <span className="italic text-slate-500 dark:text-slate-400">
            — Largest community of student builders on campus
           </span>
        </div>
            <div>
              <a
              href="https://mheal.engin.umich.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
              >
              MHEAL
              </a>{" "}
              <span className="text-slate-600 dark:text-slate-300">• Incubator</span>{" "}
              <span className="italic text-slate-500 dark:text-slate-400">
                — Bridging healthcare and technology to cultivate innovative solutions for real medical needs around the world
              </span>
            </div>
            <div>
              <a
              href="https://lsa.umich.edu/wiserp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text- slate-800 dark:text-slate-100 hover:font-bold transition-all"
              >
              WISERP
              </a>{" "}
              <span className="text-slate-600 dark:text-slate-300">• Peer Mentor</span>{" "}
              <span className="italic text-slate-500 dark:text-slate-400">
                — Supporting and guiding first-year women in STEM fields
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
