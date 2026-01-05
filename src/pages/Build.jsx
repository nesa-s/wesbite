import { Link } from "react-router-dom";


export default function Build() {
  return (
    <div className="page-container">
      <div className="content-container">
        <Link to="/" className="back-link">&larr; Back to homepage</Link>

        <div>
          <h1 className="h1-header">Projects</h1>
          <p className="main-description">
            A growing list of things I've built.
          </p>
        </div>
        <hr className="section-divider" />

        <div>
          <div className="engagement-list">
            <div>
              <a
                href="https://claris-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Claris
              </a>{" "}
              <span className="bullet-text">
                • an ai driven platform for managing, sharing, and analyzing research data; optimizing time and money for research labs (2025)
              </span>
            </div>
            <div>
              <a
                href="https://vidyapith-act.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Food Drive Tracker
              </a>{" "}
              <span className="bullet-text">
                • tracker for community food drive (2022)
              </span>
            </div>
            <div>
              <a
                href="https://syessa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Syessa
              </a>{" "}
              <span className="bullet-text">
                • DTC eCommerce store (2020)
              </span>
            </div>
            <div>
              <a
                href="https://ticktockinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Tick Tock Inc.
              </a>{" "}
              <span className="bullet-text">
                • b2b eCommerce store (2019)
              </span>
            </div>
            <div>
              <a
                href="https://nesashamdasani.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                SwirledUp
              </a>{" "}
              <span className="bullet-text">
                • my first website (2018)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
