// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Footer from "./pages/Footer";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route
//           path="/login"
//           element={<Login onLogin={() => setIsLoggedIn(true)} />}
//         />
//         <Route
//           path="/dashboard"
//           element={isLoggedIn ? <Dashboard /> : <Home />}
//         />
//       </Routes>
//       <Footer /> {/* ✅ Footer always visible */}
//     </Router>
//   );
// }

// function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//    return (
//     <nav className="navbar">
//       <div className="logo">Shows the Karizma in You On</div> {/* ✅ New branding */}
//       <div className="links">
//         <Link to="/">Home</Link>
//         <Link to="/jobs">Jobs</Link>

//         {!isLoggedIn ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <>
//             <Link to="/dashboard">Dashboard</Link>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import "./index.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import SearchJobs from "./pages/SearchJobs";
// import SearchCompanies from "./pages/SearchCompanies";
// import CompanyLists from "./pages/CompanyLists";
// import Settings from "./pages/Settings";
// import LookupCompany from "./pages/LookupCompany";
// import EnrichCompany from "./pages/EnrichCompany";
// import Feedback from "./pages/Feedback";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//        <Sidebar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/search/jobs" element={<SearchJobs />} />
//         <Route path="/search/companies" element={<SearchCompanies />} />
//         <Route path="/company-lists" element={<CompanyLists />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/lookup-company" element={<LookupCompany />} />
//         <Route path="/enrich-company" element={<EnrichCompany />} />
//         <Route path="/feedback/:type" element={<Feedback />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SearchJobs from "./pages/SearchJobs";
import SearchCompanies from "./pages/SearchCompanies";
import CompanyLists from "./pages/CompanyLists";
import Settings from "./pages/Settings";
import LookupCompany from "./pages/LookupCompany";
import EnrichCompany from "./pages/EnrichCompany";
import Feedback from "./pages/Feedback";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      {/* ✅ Navbar has button to toggle Sidebar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* ✅ Sidebar controlled by state */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search/jobs" element={<SearchJobs />} />
          <Route path="/search/companies" element={<SearchCompanies />} />
          <Route path="/company-lists" element={<CompanyLists />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/lookup-company" element={<LookupCompany />} />
          <Route path="/enrich-company" element={<EnrichCompany />} />
          <Route path="/feedback/:type" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
