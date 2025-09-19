// // src/pages/Home.js
// import { useState } from "react";

// export default function Home() {
//   const [company, setCompany] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!company) return;

//     try {
//       const response = await fetch(
//         `https://api.theirstack.com/v1/job-postings?query=${encodeURIComponent(company)}`,
//         {
//           method: "GET",
//           headers: {
//             "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyaXNoaWtlc2gua2hhbmthckBnbWFpbC5jb20iLCJwZXJtaXNzaW9ucyI6InVzZXIiLCJjcmVhdGVkX2F0IjoiMjAyNS0wOS0xOFQxOTo0MToyNS4wMTgwOTcrMDA6MDAifQ.215_XJwL7dhpV4-2J_hyOb7oBJDLAyli62vrNZ5OIVU", // replace with your API key
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       setResults(data.data || []); // TheirStack wraps jobs in "data"
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }
//   };

//   return (
//     <div className="home">
//       <section className="hero">
//         <h1>🌟 Show the Karizma in You</h1>
//         <p>
//           Discover opportunities, apply with confidence, and shine in your
//           career journey.
//         </p>
//       </section>

//       <section className="features">
//         <div className="feature-card">
//           <h2>🔍 Search Jobs</h2>
//           <p>Find openings by role, company, or location.</p>

//           {/* ✅ Input + Button */}
//           <input
//             type="text"
//             placeholder="Enter company name (e.g. Google)"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>

//           {/* ✅ Display job results here */}
//           <div className="results">
//             {results.length > 0 ? (
//               results.slice(0, 5).map((job, index) => (
//                 <div key={index} className="job-card">
//                   <h4>{job.title}</h4>
//                   <p>{job.company_name}</p>
//                   <p>{job.location}</p>
//                   {job.url && (
//                     <a
//                       href={job.url}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Apply
//                     </a>
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p>No results yet. Try searching!</p>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React from "react";

// const Home = () => <h1>Welcome to Karizma Portal 🏠 Show Your Karizma Here.. :)</h1>;

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <h1>
//           Show the <span className="highlight">Karizma</span> in You ✨
//         </h1>
//         <p>Your all-in-one career portal for jobs, companies & opportunities.</p>
//       </header>

//       <div className="home-actions">
//         <Link to="/search/jobs" className="home-card">
//           🔍 Find Jobs
//         </Link>
//         <Link to="/search/companies" className="home-card">
//           🏢 Explore Companies
//         </Link>
//         <Link to="/company-lists" className="home-card">
//           📋 Company Lists
//         </Link>
//         <Link to="/settings" className="home-card">
//           ⚙️ Your Settings
//         </Link>
//       </div>

//       <footer className="home-footer">
//         <p>🚀 Powered by Karizma Portal</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; // Use this CSS file

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1 className="hero-title">🌟 Karizma Portal</h1>
//         <p className="hero-subtitle">
//           Unlock the Karizma in You! <br />
//           Discover opportunities, explore companies, and take charge of your
//           career journey.
//         </p>

//         <div className="hero-buttons">
//           <Link to="/search-jobs" className="hero-btn">
//             🔍 Search Jobs
//           </Link>
//           <Link to="/search-companies" className="hero-btn secondary">
//             🏢 Explore Companies
//           </Link>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="about-section">
//         <h2>💼 About Karizma Portal</h2>
//         <p>
//           Karizma Portal is your one-stop solution for career exploration. From
//           connecting with top Indian and global MNCs to tracking your job
//           applications — we provide everything you need to thrive in today’s job
//           market.
//         </p>
//       </div>

//       {/* Job Market Insights */}
//       <div className="insights-section">
//         <h2>📊 Job Market in India</h2>
//         <p>
//           India’s job market is evolving rapidly, driven by technology,
//           startups, and global investments. IT services, fintech, e-commerce,
//           and manufacturing are leading the way with growing opportunities for
//           freshers and experienced professionals alike.
//         </p>
//         <p>
//           According to NASSCOM, India is home to <b>75% of the world’s digital
//           talent</b>. With initiatives like <i>Digital India</i> and
//           <i>Make in India</i>, the country is positioning itself as a global
//           innovation hub.
//         </p>
//       </div>

//       {/* Inspirational Quotes */}
//       <div className="quotes-section">
//         <h2>✨ Words from Leaders</h2>
//         <blockquote>
//           “Growth is never by mere chance; it is the result of forces working
//           together.” – <b>J.R.D. Tata</b>
//         </blockquote>
//         <blockquote>
//           “Take the stones people throw at you, and use them to build a
//           monument.” – <b>Ratan Tata</b>
//         </blockquote>
//         <blockquote>
//           “Leadership is about making others better as a result of your presence
//           and making sure that impact lasts in your absence.” – <b>Indra Nooyi</b>
//         </blockquote>
//       </div>

//       {/* Closing CTA */}
//       <div className="cta-section">
//         <h2>🚀 Ready to begin your journey?</h2>
//         <Link to="/search-jobs" className="hero-btn">
//           Start Exploring Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const quotes = [
  { text: "Growth is never by mere chance; it is the result of forces working together.", author: "J.R.D. Tata" },
  { text: "Take the stones people throw at you, and use them to build a monument.", author: "Ratan Tata" },
  { text: "Leadership is about making others better as a result of your presence and making sure that impact lasts in your absence.", author: "Indra Nooyi" },
  { text: "Our assets walk out of the door each evening. We have to make sure they come back the next morning.", author: "Narayana Murthy (Infosys)" },
  { text: "Performance leads to recognition, recognition leads to respect, respect leads to power, power leads to responsibility.", author: "Azim Premji (Wipro)" },
  { text: "If people are not laughing at your goals, your goals are too small.", author: "Azim Premji" },
  { text: "It’s fine to celebrate success, but it is more important to heed the lessons of failure.", author: "N. R. Narayana Murthy" },
  { text: "The biggest risk is not taking any risk.", author: "Mukesh Ambani" },
  { text: "Business is not about money. It’s about making dreams come true for others and for yourself.", author: "Dhirubhai Ambani" },
  { text: "An idea can change your life. Execute it with passion and persistence.", author: "Nandan Nilekani (Infosys)" }
];

const getRandomQuotes = (num) => {
  const shuffled = [...quotes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Home = () => {
  const selectedQuotes = getRandomQuotes(3);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">🌟 Karizma Portal</h1>
        <p className="hero-subtitle">
          Unlock the Karizma in You! <br />
          Discover opportunities, explore companies, and take charge of your
          career journey.
        </p>

        <div className="hero-buttons">
          <Link to="/search-jobs" className="hero-btn">🔍 Search Jobs</Link>
          <Link to="/search-companies" className="hero-btn secondary">🏢 Explore Companies</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>💼 About Karizma Portal</h2>
        <p>
          Karizma Portal is your one-stop solution for career exploration. From
          connecting with top Indian and global MNCs to tracking your job
          applications — we provide everything you need to thrive in today’s job
          market.
        </p>
      </div>

      {/* Job Market Insights */}
      <div className="insights-section">
        <h2>📊 Job Market in India</h2>
        <p>
          India’s job market is evolving rapidly, driven by technology,
          startups, and global investments. IT services, fintech, e-commerce,
          and manufacturing are leading the way with growing opportunities for
          freshers and experienced professionals alike.
        </p>
        <p>
          According to NASSCOM, India is home to <b>75% of the world’s digital
          talent</b>. With initiatives like <i>Digital India</i> and
          <i>Make in India</i>, the country is positioning itself as a global
          innovation hub.
        </p>
      </div>

      {/* Inspirational Quotes */}
      <div className="quotes-section">
        <h2>✨ Words from Leaders</h2>
        {selectedQuotes.map((q, index) => (
          <blockquote key={index}>
            “{q.text}” – <b>{q.author}</b>
          </blockquote>
        ))}
      </div>

<div className="cta-section">
  <h2>🚀 Ready to begin your journey?</h2>
  <a 
    href="http://localhost:3002" 
    className="hero-btn"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Start Exploring Now
  </a>
</div>

    </div>
  );
};

export default Home;
