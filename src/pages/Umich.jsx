import { Link } from "react-router-dom";

export default function Umich() {
  return (
    <div className="page-container">
      <div className="content-container">
        <Link to="/" className="back-link">&larr; Back to homepage</Link>

        <div>
          <h1 className="h1-header">University of Michigan</h1>
          <p className="main-description">
            B.S.E. in Computer Science & Biomedical Engineering
          </p>
          <p className="paragraph">
            Pursuring the intersection of technology and biology to disrupt and revolutionize the healthcare industries.
          </p>
        </div>
        <hr className="section-divider" />


        <div>
          <h2 className="h2-header">Coursework</h2>
          <div className="content-list">
            <div>EECS 203: Discrete Mathematics</div>
            <div>EECS 280: Programming and Intro Data Structures</div>
            <div>EECS 281: Data Structures and Algorithms</div>
            <div>EECS 370: Computer Organization</div>
            <div>Piano 110: Beginning Piano</div>
            <div>ENTR 407: Entrepreneurship Hour with Center for Entrepreneurship</div>
          </div>
        </div>

        <hr className="section-divider" />

        <div>
          <h2 className="h2-header">Engagements</h2>
          <div className="engagement-list">
            <div>
              <a
                href="https://team.mhacks.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                M-Hacks
              </a>{" "}
              <span className="bullet-text">• Outreach & HackerX</span>{" "}
              <span className="italic-description">
                — University of Michigan's largest hackathon organization
              </span>
            </div>
            <div>
              <a
                href="https://sites.lsa.umich.edu/mpmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Plant Microbe Interaction Lab
              </a>{" "}
              <span className="italic-description">
                — Working on virus vector-based delivery system for CRISPR/Cas9 components to produce genetically modified cotton plants
              </span>
            </div>
            <div>
              <a
                href="https://v1michigan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                V1
              </a>{" "}
              <span className="bullet-text">• Community Team • W25 Product Studio</span>{" "}
              <span className="italic-description">
                — Largest community of student builders on campus
              </span>
            </div>
            <div>
              <a
                href="https://mheal.engin.umich.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                MHEAL
              </a>{" "}
              <span className="bullet-text">• Professional Development Director • Team DRIP</span>{" "}
              <span className="italic-description">
                — Bridging healthcare and technology to cultivate innovative solutions for real medical needs around the world
              </span>
            </div>
            <div>
              <a
                href="https://lsa.umich.edu/wiserp"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                WISERP
              </a>{" "}
              <span className="bullet-text">• Peer Mentor</span>{" "}
              <span className="italic-description">
                — Supporting and guiding first-year women in STEM fields
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
