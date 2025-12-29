import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Quote() {
  return ( 
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 px-6 sm:px-12">
      <div className="max-w-3xl space-y-10">
        <Link to="/grow" className="text-sm text-blue-500 hover:underline">&larr; Back to growth</Link>

      <div>
        <h1 className="text-4xl font-bold">Quotes I've Fallen For </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A collection of quotes that have resonated with me.
          </p>
      </div>
      <hr className="border-slate-300 dark:border-slate-600 mb-2" />
      <div>
        <p className = "paragraph"> Doesn’t matter if you’re a glass half full person or a glass half empty person. 
        All that matters is the glass is refillable. </p>
        <p className = "paragraph"> “Who we are cannot be separated from where we're from.”
        ― Malcolm Gladwell</p>
        <p className = "paragraph"> "Stay hungry. Stay foolish." ― Steve Jobs </p>
        <p className = "paragraph"> "You are the greatest project you will ever work on." ― Josh Ether</p>



      </div>
    </div>
    </div>
  );
}