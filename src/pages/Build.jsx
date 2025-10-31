import { Link } from "react-router-dom";


export default function Build() {
  return (
    <div>
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 px-6 sm:px-12">
      <div className="max-w-3xl space-y-10">
        <Link to="/" className="text-sm text-blue-500 hover:underline">&larr; Back to homepage</Link>

        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A growing list of things I've built.
          </p>
        </div>
        <hr className="border-slate-300 dark:border-slate-600 mb-8" />

        <div>
          <div className="space-y-3">
            <div>
              <a
              href="https://claris-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
              >
              Claris
              </a>{" "}
              <span className="text-slate-600 dark:text-slate-300">• an ai driven platform for managing,sharing,and analyzing research data; optimizing time and money for research labs(2025) </span>{" "}
            </div>
            <div>
              <a
              href="https://vidyapith-act.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
              >
              Food Drive Tracker
              </a>{" "}
              <span className="text-slate-600 dark:text-slate-300">• tracker for community food drive (2022)</span>{" "}
            </div>
            <div>
                <a
                href="https://syessa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
                >
                Syessa
                </a>{" "}
              <span className= "text-slate-600 dark:text-slate-300">
              •DTC eCommerce store (2020)
              </span>
            </div>
        <div>
            <a
            href="https://ticktockinc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-800 dark:text-slate-100 hover:font-bold transition-all"
            >
            Tick Tock Inc.
           </a>{" "}
           <span className="text-slate-600 dark:text-slate-300">• b2b eCommerce store (2019)</span>{" "}
           
        </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
