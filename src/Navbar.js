// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo animate-logo">✨ Karizma Portal ✨</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/search-jobs">Search Jobs</Link></li>
//         <li><Link to="/search-companies">Search Companies</Link></li>
//         <li><Link to="/lookup-company">Look Up Company</Link></li>
//         <li><Link to="/enrich-company">Enrich Company Data</Link></li>
//         <li><Link to="/company-list">Company List</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import "./Navbar.css";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">✨ Karizma Portal ✨</div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/search-jobs">Search Jobs</Link></li>
//           <li><Link to="/search-companies">Search Companies</Link></li>
//           <li><Link to="/lookup-company">Lookup Company</Link></li>
//           <li><Link to="/enrich-company">Enrich Data</Link></li>
//           <li><Link to="/company-list">Company List</Link></li>
//           <li><Link to="/settings">Settings</Link></li>
//         </ul>

//         {/* Sidebar Toggle in Navbar */}
//         <button 
//           className="sidebar-toggle" 
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? "✖" : "☰"}
//         </button>
//       </nav>

//       {/* Sidebar Component */}
//       <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import "./Navbar.css";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar">
//         {/* Sidebar Toggle on Left */}
//         <button 
//           className="sidebar-toggle" 
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? "✖" : "☰"}
//         </button>

//         {/* Logo shifted slightly right */}
//         <div className="logo">✨ Karizma Portal ✨</div>

//         {/* Navbar links on right */}
//        <ul className="nav-links">
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/search-jobs">Search Jobs</Link></li>
//   <li><Link to="/search-companies">Search Companies</Link></li>  {/* ✅ Must match App.js */}
//   <li><Link to="/lookup-company">Lookup Company</Link></li>
//   <li><Link to="/enrich-company">Enrich Data</Link></li>
//   <li><Link to="/company-list">Company List</Link></li>
//   <li><Link to="/settings">Settings</Link></li>
// </ul>

//       </nav>

//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
//     </>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

// function Navbar({ toggleSidebar }) {
//   return (
//     <nav className="navbar">
//       <button className="sidebar-toggle" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       <div className="logo">✨ Karizma Portal</div>
//       <ul className="nav-links">
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/search/jobs">Search Jobs</Link></li>
//         <li><Link to="/search/companies">Search Companies</Link></li>
//         <li><Link to="/lookup-company">Lookup Company</Link></li>
//         <li><Link to="/enrich-company">Enrich Data</Link></li>
//         <li><Link to="/company-lists">Company List</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      {/* Sidebar toggle button */}
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Animated logo */}
      <div className="logo">Show your Karizma on</div>

      {/* Navbar links */}
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li> 
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/search/jobs">Search Jobs</Link></li>
        <li><Link to="/search/companies">Search Companies</Link></li>
        <li><Link to="/lookup-company">Lookup Company</Link></li>
        <li><Link to="/enrich-company">Enrich Data</Link></li>
        <li><Link to="/company-lists">Company List</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
