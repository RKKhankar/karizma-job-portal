// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Toggle Button */}
//       <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "✖" : "☰"}
//       </button>

//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <h2 className="sidebar-title">📂 Menu</h2>
//         <ul>
//           <li><Link to="/">🏠 Home</Link></li>
//           <li><Link to="/search-jobs">💼 Search Jobs</Link></li>
//           <li><Link to="/search-companies">🏢 Search Companies</Link></li>
//           <li><Link to="/lookup-company">🔍 Lookup Company</Link></li>
//           <li><Link to="/enrich-company">📊 Enrich Company Data</Link></li>
//           <li><Link to="/company-list">📋 Company List</Link></li>
//           <li><Link to="/settings">⚙️ Settings</Link></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = ({ isOpen, closeSidebar }) => {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <h2 className="sidebar-title">📂 Menu</h2>
//       <ul>
//         <li><Link to="/" onClick={closeSidebar}>🏠 Home</Link></li>
//         <li><Link to="/search-jobs" onClick={closeSidebar}>💼 Search Jobs</Link></li>
//         <li><Link to="/search-companies" onClick={closeSidebar}>🏢 Search Companies</Link></li>
//         <li><Link to="/lookup-company" onClick={closeSidebar}>🔍 Lookup Company</Link></li>
//         <li><Link to="/enrich-company" onClick={closeSidebar}>📊 Enrich Data</Link></li>
//         <li><Link to="/company-list" onClick={closeSidebar}>📋 Company List</Link></li>
//         <li><Link to="/settings" onClick={closeSidebar}>⚙️ Settings</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";
// import { Link } from "react-router-dom";

// function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <button className="close-btn" onClick={toggleSidebar}>×</button>
//       <ul>
//         <li><Link to="/home" onClick={toggleSidebar}>Home</Link></li>
//         <li><Link to="/search/jobs" onClick={toggleSidebar}>Search Jobs</Link></li>
//         <li><Link to="/search/companies" onClick={toggleSidebar}>Search Companies</Link></li>
//         <li><Link to="/lookup-company" onClick={toggleSidebar}>Lookup Company</Link></li>
//         <li><Link to="/enrich-company" onClick={toggleSidebar}>Enrich Data</Link></li>
//         <li><Link to="/company-lists" onClick={toggleSidebar}>Company List</Link></li>
//         <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ✕
      </button>
      <ul>
        <li><Link to="/home" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/search/jobs" onClick={toggleSidebar}>Search Jobs</Link></li>
        <li><Link to="/search/companies" onClick={toggleSidebar}>Search Companies</Link></li>
        <li><Link to="/lookup-company" onClick={toggleSidebar}>Lookup Company</Link></li>
        <li><Link to="/enrich-company" onClick={toggleSidebar}>Enrich Data</Link></li>
        <li><Link to="/company-lists" onClick={toggleSidebar}>Company List</Link></li>
        <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
