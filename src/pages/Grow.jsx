import { Link } from "react-router-dom";

export default function Grow() {
  return (
  <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 px-6 sm:px-12">
      <div className="max-w-3xl space-y-10">
        <Link to="/" className="text-sm text-blue-500 hover:underline">&larr; Back to homepage</Link>

      <div>
        <h1 className="text-4xl font-bold">Growth</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
             written pieces, books I'm into, & other things that interest me.
          </p>
      </div>
      <hr className="border-slate-300 dark:border-slate-600 mb-8" />

      <div>
        <h2 className="text-2xl font-semibold mb-2">Written Pieces</h2>
        <p className="text-slate-500 dark:text-slate-400">some personal, reflective, and random</p>
        <div className="space-y-1 mt-4">
          <div>
            <Link to="/recap/2025" className="writing">2025 Year in Review</Link>
          </div>
          <div>
            <Link to="/quote" className="writing">Quotes I've Fallen For</Link>
          </div>
        </div>
      </div>
      

      <hr className="border-slate-300 dark:border-slate-600 mb-8" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">My Top Reads</h2>
        <p className="text-slate-500 dark:text-slate-400">a mix of memoirs, biographies, social science, and fiction</p>
        <div className="space-y-1">
          <div className="books">The Glass Castle</div>
          <div className="books">Outliers: The Story of Success</div>
          <div className="books">Sadako and the Thousand Paper Cranes</div>
          <div className="books">The Greatest Trade Ever</div>
          <div className="books">All We Have Left</div>
          <div className="books">Between Shades of Gray</div>
          <div className="books">The Invention of Hugo Cabret</div>
          <div className="books">Full Body Burden</div>
          <div className="books">Sparks Like Stars</div>
        </div>
      </div>

      <hr className="border-slate-300 dark:border-slate-600 mb-8" />

      <div>
        <h2 className="text-2xl font-semibold mb-2">The other things that interest me</h2>
        <p className="text-slate-500 dark:text-slate-400"> papers/blogs/podcasts/movies that intrigue me</p>
        <div className="space-y-1">
          <div className="hover:font-bold hover:text-purple-500">
            <a href="https://www.ai-lab.com/wp-content/uploads/2025/06/The-Future-of-AI-and-the-Future-of-Work.pdf" 
            target="_blank" 
            rel="noopener noreferrer">
              The Future of AI and the Future of Work</a>
          </div>
        </div>
      </div>

      <hr className="border-slate-300 dark:border-slate-600 mb-8" />

      <div>
        <h2 className="text-2xl font-semibold mb-2">Music</h2>
        <p className="text-slate-500 dark:text-slate-400">my top 5 most played songs pulled and updated from my spotify</p>

        <div className="space-y-1">
          
        </div>
      </div>
    </div>
  </div>
  );
}
  