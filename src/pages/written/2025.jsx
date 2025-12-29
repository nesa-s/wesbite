import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Recap2025() {
  return ( 
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 px-6 sm:px-12">
      <div className="max-w-3xl space-y-10">
        <Link to="/grow" className="text-sm text-blue-500 hover:underline">&larr; Back to growth</Link>

      <div>
        <h1 className="text-4xl font-bold">2025 Year in Review</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            December 29, 2025
          </p>
      </div>
      <hr className="border-slate-300 dark:border-slate-600 mb-8" />
      </div>

      <div>
        <div className="space-y-1"></div>
        <p className = "paragraph">coming soon...</p>
      </div>
    </div>
  );
}