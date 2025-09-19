// export default function Dashboard() {
//   const user = {
//     name: "Rushikesh Khankar",
//     email: "rushikesh@example.com",
//     role: "Job Seeker",
//     skills: ["React", "Node.js", "MongoDB", "CSS"],
//   };

//   const appliedJobs = [
//     { id: 1, title: "Frontend Developer", company: "Tech Corp", status: "Under Review" },
//     { id: 2, title: "Backend Developer", company: "Code Ltd", status: "Applied" },
//     { id: 3, title: "UI/UX Designer", company: "DesignPro", status: "Rejected" },
//   ];

//   return (
//     <div className="container">
//       <h1>Welcome, {user.name} 👋</h1>

//       <section className="profile-card">
//         <h2>Profile Summary</h2>
//         <p><b>Email:</b> {user.email}</p>
//         <p><b>Role:</b> {user.role}</p>
//         <p><b>Skills:</b> {user.skills.join(", ")}</p>
//       </section>

//       <section className="applied-jobs">
//         <h2>Applied Jobs</h2>
//         {appliedJobs.map(job => (
//           <div key={job.id} className="job-card">
//             <h3>{job.title}</h3>
//             <p>Company: {job.company}</p>
//             <p>Status: <b>{job.status}</b></p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { FaHome, FaSearch, FaBuilding, FaList, FaCog, FaTimes } from "react-icons/fa";

// const Dashboard = () => {
//   const [showFeedback, setShowFeedback] = useState(true);

//   return (
//     <div className="app-container flex h-screen w-screen">
//       {/* Sidebar */}
//       <aside className="sidebar w-64 bg-white border-r shadow-md flex flex-col">
//         <div className="p-4 font-bold text-xl">Karizma Portal</div>

//         {/* Search Bar */}
//         <div className="px-4">
//           <input
//             type="text"
//             placeholder="Search companies..."
//             className="w-full p-2 rounded-md border"
//           />
//         </div>

//         {/* Nav Links */}
//         <nav className="flex-1 mt-4 space-y-2 px-4">
//           <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
//             <FaHome /> Home
//           </a>
//           <div>
//             <button className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded">
//               <FaSearch /> Search
//             </button>
//             <div className="ml-6 space-y-1">
//               <a href="#" className="block hover:underline">Jobs</a>
//               <a href="#" className="block hover:underline">Companies</a>
//             </div>
//           </div>
//           <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
//             <FaList /> Company Lists
//           </a>
//           <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
//             <FaCog /> Settings
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content flex-1 bg-gray-50 p-6 overflow-y-auto">
//         <h2 className="text-2xl font-semibold mb-4">Start a new search</h2>

//         {/* Search Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           <div className="p-4 bg-white rounded shadow hover:shadow-md cursor-pointer">
//             <h3 className="font-semibold">Search Jobs</h3>
//             <p className="text-sm text-gray-600">
//               Across 50M+ jobs worldwide from LinkedIn, Indeed, etc.
//             </p>
//           </div>
//           <div className="p-4 bg-white rounded shadow hover:shadow-md cursor-pointer">
//             <h3 className="font-semibold">Search Companies</h3>
//             <p className="text-sm text-gray-600">
//               Filter by technologies, industries, size, revenue.
//             </p>
//           </div>
//           <div className="p-4 bg-white rounded shadow hover:shadow-md cursor-pointer">
//             <h3 className="font-semibold">Look up a company</h3>
//             <p className="text-sm text-gray-600">
//               Jump straight to details like jobs, size, etc.
//             </p>
//           </div>
//           <div className="p-4 bg-white rounded shadow hover:shadow-md cursor-pointer">
//             <h3 className="font-semibold">Enrich company list</h3>
//             <p className="text-sm text-gray-600">
//               Download tech stack for company websites or names.
//             </p>
//           </div>
//         </div>

//         {/* Saved & Recent Searches */}
//         <section className="mb-8">
//           <h3 className="font-semibold text-lg mb-2">Your saved searches</h3>
//           <p className="text-gray-600">You haven't saved any searches yet</p>
//         </section>

//         <section>
//           <h3 className="font-semibold text-lg mb-2">Your recent searches</h3>
//           <p className="text-gray-600">You haven't done any searches yet</p>
//         </section>
//       </main>

//       {/* Feedback Widget (bottom-right) */}
//       {showFeedback && (
//         <div className="fixed bottom-6 right-6 bg-white border rounded-lg shadow-lg w-72 p-4">
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-semibold text-sm">How satisfied are you with Karizma Portal?</h4>
//             <button onClick={() => setShowFeedback(false)}>
//               <FaTimes />
//             </button>
//           </div>
//           <div className="flex justify-around text-2xl mb-4">
//             <span>😞</span>
//             <span>😐</span>
//             <span>😊</span>
//           </div>
//           <button className="w-full bg-gray-800 text-white py-2 rounded">Submit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from "react";

// const Dashboard = () => {
//   const [showFeedback, setShowFeedback] = useState(true);

//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">Karizma Portal</div>

//         {/* Search Bar */}
//         <input type="text" placeholder="Search companies..." />

//         {/* Nav Links */}
//         <nav>
//           <a href="#">🏠 Home</a>
//           <button>🔍 Search</button>
//           <div className="submenu">
//             <a href="#">Jobs</a>
//             <a href="#">Companies</a>
//           </div>
//           <a href="#">📋 Company Lists</a>
//           <a href="#">⚙️ Settings</a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <h2>Start a new search</h2>

//         {/* Search Cards */}
//         <div className="cards">
//           <div className="card">
//             <h3>Search Jobs</h3>
//             <p>Across 50M+ jobs worldwide from LinkedIn, Indeed, etc.</p>
//           </div>
//           <div className="card">
//             <h3>Search Companies</h3>
//             <p>Filter by technologies, industries, size, revenue.</p>
//           </div>
//           <div className="card">
//             <h3>Look up a company</h3>
//             <p>Jump straight to details like jobs, size, etc.</p>
//           </div>
//           <div className="card">
//             <h3>Enrich company list</h3>
//             <p>Download tech stack for company websites or names.</p>
//           </div>
//         </div>

//         {/* Saved & Recent Searches */}
//         <section>
//           <h3>Your saved searches</h3>
//           <p>You haven't saved any searches yet</p>
//         </section>

//         <section>
//           <h3>Your recent searches</h3>
//           <p>You haven't done any searches yet</p>
//         </section>
//       </main>

//       {/* Feedback Widget */}
//       {showFeedback && (
//         <div className="feedback-widget">
//           <header>
//             <h4>How satisfied are you with Karizma Portal?</h4>
//             <button onClick={() => setShowFeedback(false)}>✖</button>
//           </header>
//           <div className="emojis">
//             <span>😞</span>
//             <span>😐</span>
//             <span>😊</span>
//           </div>
//           <button className="submit">Submit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [showFeedback, setShowFeedback] = useState(true);

//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">
//           <Link to="/">Karizma Portal</Link>
//         </div>

//         {/* Search Bar */}
//         <input type="text" placeholder="Search companies..." />

//         {/* Nav Links */}
//         <nav>
//           <Link to="/home">🏠 Home</Link>
//           <Link to="/search">🔍 Search</Link>
//           <div className="submenu">
//             <Link to="/search/jobs">Jobs</Link>
//             <Link to="/search/companies">Companies</Link>
//           </div>
//           <Link to="/company-lists">📋 Company Lists</Link>
//           <Link to="/settings">⚙️ Settings</Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <h2>Start a new search</h2>

//         {/* Search Cards */}
//         <div className="cards">
//           <Link to="/search/jobs" className="card">
//             <h3>Search Jobs</h3>
//             <p>Across 50M+ jobs worldwide from LinkedIn, Indeed, etc.</p>
//           </Link>
//           <Link to="/search/companies" className="card">
//             <h3>Search Companies</h3>
//             <p>Filter by technologies, industries, size, revenue.</p>
//           </Link>
//           <Link to="/lookup-company" className="card">
//             <h3>Look up a company</h3>
//             <p>Jump straight to details like jobs, size, etc.</p>
//           </Link>
//           <Link to="/enrich-company" className="card">
//             <h3>Enrich company list</h3>
//             <p>Download tech stack for company websites or names.</p>
//           </Link>
//         </div>

//         {/* Saved & Recent Searches */}
//         <section>
//           <h3>Your saved searches</h3>
//           <p>
//             You haven’t saved any searches yet.{" "}
//             <Link to="/search" style={{ color: "#2563eb" }}>
//               Start searching
//             </Link>
//           </p>
//         </section>

//         <section>
//           <h3>Your recent searches</h3>
//           <p>
//             You haven’t done any searches yet.{" "}
//             <Link to="/search" style={{ color: "#2563eb" }}>
//               Try now
//             </Link>
//           </p>
//         </section>
//       </main>

//       {/* Feedback Widget */}
//       {showFeedback && (
//         <div className="feedback-widget">
//           <header>
//             <h4>How satisfied are you with Karizma Portal?</h4>
//             <button onClick={() => setShowFeedback(false)}>✖</button>
//           </header>
//           <div className="emojis">
//             <Link to="/feedback/bad">😞</Link>
//             <Link to="/feedback/neutral">😐</Link>
//             <Link to="/feedback/good">😊</Link>
//           </div>
//           <Link to="/feedback/submit">
//             <button className="submit">Submit</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showFeedback, setShowFeedback] = useState(true);

  return (
    <div className="app-container dashboard-bg">
      {/* Sidebar */}
      <aside className="sidebar glass-card">
        <div className="logo">
          <Link to="/">Karizma Portal</Link>
        </div>

        <input type="text" placeholder="Search companies..." />

        <nav>
          <Link to="/home">🏠 Home</Link>
          <Link to="/search">🔍 Search</Link>
          <div className="submenu">
            <Link to="/search/jobs">Jobs</Link>
            <Link to="/search/companies">Companies</Link>
          </div>
          <Link to="/company-lists">📋 Company Lists</Link>
          <Link to="/settings">⚙️ Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content glass-card">
        <h2>Start a new search</h2>

        <div className="cards">
          <Link to="/search/jobs" className="card glass-card">
            <h3>Search Jobs</h3>
            <p>Across 50M+ jobs worldwide from LinkedIn, Indeed, etc.</p>
          </Link>
          <Link to="/search/companies" className="card glass-card">
            <h3>Search Companies</h3>
            <p>Filter by technologies, industries, size, revenue.</p>
          </Link>
          <Link to="/lookup-company" className="card glass-card">
            <h3>Look up a company</h3>
            <p>Jump straight to details like jobs, size, etc.</p>
          </Link>
          <Link to="/enrich-company" className="card glass-card">
            <h3>Enrich company list</h3>
            <p>Download tech stack for company websites or names.</p>
          </Link>
        </div>

        <section>
          <h3>Your saved searches</h3>
          <p>
            You haven’t saved any searches yet.{" "}
            <Link to="/search" style={{ color: "#2563eb" }}>
              Start searching
            </Link>
          </p>
        </section>

        <section>
          <h3>Your recent searches</h3>
          <p>
            You haven’t done any searches yet.{" "}
            <Link to="/search" style={{ color: "#2563eb" }}>
              Try now
            </Link>
          </p>
        </section>
      </main>

      {/* Feedback Widget */}
      {showFeedback && (
        <div className="feedback-widget glass-card">
          <header>
            <h4>How satisfied are you with Karizma Portal?</h4>
            <button onClick={() => setShowFeedback(false)}>✖</button>
          </header>
          <div className="emojis">
            <Link to="/feedback/bad">😞</Link>
            <Link to="/feedback/neutral">😐</Link>
            <Link to="/feedback/good">😊</Link>
          </div>
          <Link to="/feedback/submit">
            <button className="submit">Submit</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
