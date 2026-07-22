import { Link } from "react-router-dom";

export default function Grow() {
  return (
  <div className="page-container">
      <div className="content-container">
        <Link to="/" className="back-link">&larr; Back to homepage</Link>

      <div>
        <h1 className="h1-header">Growth</h1>
        <p className="main-description">
          written pieces, books I'm into, & other things that interest me.
        </p>
      </div>
      <hr className="section-divider" />

      <div>
        <h2 className="h2-header">Written Pieces</h2>
        <p className="sub-description">some personal, reflective, and random</p>
        <div className="content-list">
          <div>
            <Link to="/quote" className="writing">Quotes</Link>
          </div>

        </div>
      </div>

      <hr className="section-divider" />

      <div>
        <h2 className="h2-header">My Top Reads</h2>
        <p className="sub-description">a mix of memoirs, biographies, social science, and fiction</p>
        <div className="content-list">
          <div className="books">The Glass Castle (Jeannette Walls)</div>
          <div className="books">Outliers: The Story of Success (Malcolm Gladwell)</div>
          <div className="books">Sadako and the Thousand Paper Cranes (Eleanor Coerr)</div>
          <div className="books">The Greatest Trade Ever (Gregory Zuckerman)</div>
          <div className="books">Tomorrow, and Tomorrow, and Tomorrow (Gabrielle Zevin)</div>
          <div className="books">Between Shades of Gray (Ruta Sepetys)</div>
          <div className="books">The Invention of Hugo Cabret (Brian Selznick)</div>
          <div className="books">Full Body Burden (Kristen Iversen)</div>
        </div>
      </div>

      <hr className="section-divider" />

      <div>
        <h2 className="h2-header">The other things that interest me</h2>
        <p className="sub-description">papers/blogs/podcasts/articles that caught my attention</p>
        <div className="content-list">
          <div className="purple-hover">
            <a 
              href="https://doctorpenguin.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Eric Topol
            </a>
          </div>
          <div className="purple-hover">
            <a 
              href="https://paulgraham.com/think.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              "How to Think For Yourself" PG
            </a>
          </div>
          <div className="purple-hover">
            <a 
              href="https://www.youtube.com/user/caseyneistat" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Casey Neistat
            </a>
          </div>
          <div className="purple-hover">
            <a 
              href="https://ai-2027.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              AI 2027
            </a>
          </div>
          <div className="purple-hover">
            <a 
              href="https://yolken.net/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Benjamin Yolken
            </a>
          </div>
          <div className="purple-hover">
            <a 
              href="https://open.spotify.com/show/1ILHVeQ1jbI3pClQiy8oN6?si=7fa1de5415f0423b" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Unsupervised Learning
            </a>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div>
        <h2 className="h2-header">Music</h2>
        <p className="sub-description">my top 5 most played songs consistently updated from my spotify every 14 days</p>
        <SpotifyTopTracks />
      </div>
    </div>
  </div>
  );
}
  