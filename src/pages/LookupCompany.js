// import React from "react";

// const LookupCompany = () => <h1>Look up a Company 🔎</h1>;

// export default LookupCompany;
// import React, { useState } from "react";
// import companiesData from "../data/companies.json";
// import "./LookupCompany.css";

// const LookupCompany = () => {
//   const [search, setSearch] = useState("");
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const filteredCompanies = companiesData.filter((company) =>
//     company.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="lookup-container">
//       {/* 🔍 Search Input */}
//       <div className="lookup-header">
//         <h1>🔎 Look Up a Company</h1>
//         <input
//           type="text"
//           placeholder="Search for a company..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="lookup-content">
//         {/* 📋 Company List */}
//         <div className="company-list">
//           {filteredCompanies.length > 0 ? (
//             filteredCompanies.map((company, index) => (
//               <div
//                 key={index}
//                 className={`company-item ${
//                   selectedCompany?.name === company.name ? "active" : ""
//                 }`}
//                 onClick={() => setSelectedCompany(company)}
//               >
//                 <h3>{company.name}</h3>
//                 <p>{company.location}</p>
//               </div>
//             ))
//           ) : (
//             <p className="no-results">No companies found.</p>
//           )}
//         </div>

//         {/* 📊 Company Details Panel */}
//         <div className="company-details">
//           {selectedCompany ? (
//             <div>
//               <h2>{selectedCompany.name}</h2>
//               <p><b>📍 Location:</b> {selectedCompany.location}</p>
//               <p><b>⭐ Rating:</b> {selectedCompany.rating}</p>
//               <p><b>📅 Founded:</b> {selectedCompany.foundedYear}</p>
//               <p><b>💼 Openings:</b> {selectedCompany.jobOpenings}</p>
//               <a
//                 href={selectedCompany.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-btn"
//               >
//                 Visit Website
//               </a>
//             </div>
//           ) : (
//             <p className="placeholder">Select a company to see details.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LookupCompany;

import React, { useState, useEffect } from "react";
import companiesData from "../data/lookupCompanies.json"; // Import JSON file
import "./LookupCompany.css"; // ✅ corrected path

const LookupCompany = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companiesData);

  useEffect(() => {
    // Filter companies as user types
    const results = companiesData.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(results);
  }, [searchTerm]);

  return (
    <div className="lookup-container">
      {/* Sidebar */}
      <div className="company-list">
        <h2>Companies</h2>
        <input
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <ul>
          {filteredCompanies.map((company) => (
            <li
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className={selectedCompany?.id === company.id ? "active" : ""}
            >
              {company.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Details Panel */}
      <div className="company-details">
        {selectedCompany ? (
          <>
            <h2>{selectedCompany.name}</h2>
            <p><strong>Industry:</strong> {selectedCompany.industry}</p>
            <p><strong>Location:</strong> {selectedCompany.location}</p>
            <a
              href={selectedCompany.website}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              Visit Website
            </a>
          </>
        ) : (
          <p className="placeholder-text">Select a company to see details.</p>
        )}
      </div>
    </div>
  );
};

export default LookupCompany;
