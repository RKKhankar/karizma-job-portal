// import React from "react";

// const SearchCompanies = () => <h1>Search Companies Page 🏢</h1>;

// export default SearchCompanies;

// import React, { useState } from "react";

// const SearchCompanies = () => {
//   const [search, setSearch] = useState("");

//   // Dummy company data
//   const companies = [
//     {
//       id: 1,
//       name: "Google",
//       industry: "Technology",
//       location: "Bangalore, India",
//       size: "150,000+ employees",
//       website: "https://careers.google.com",
//     },
//     {
//       id: 2,
//       name: "Amazon",
//       industry: "E-commerce & Cloud",
//       location: "Hyderabad, India",
//       size: "1,600,000+ employees",
//       website: "https://www.amazon.jobs",
//     },
//     {
//       id: 3,
//       name: "Microsoft",
//       industry: "Software & Cloud",
//       location: "Remote / PAN India",
//       size: "220,000+ employees",
//       website: "https://careers.microsoft.com",
//     },
//   ];

//   const filteredCompanies = companies.filter(
//     (company) =>
//       company.name.toLowerCase().includes(search.toLowerCase()) ||
//       company.industry.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="companies-container">
//       <h2>🏢 Search Companies</h2>
//       <input
//         type="text"
//         placeholder="Search by company, industry..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="company-search-input"
//       />

//       <div className="company-cards">
//         {filteredCompanies.length > 0 ? (
//           filteredCompanies.map((company) => (
//             <div key={company.id} className="company-card">
//               <h3>{company.name}</h3>
//               <p>💼 {company.industry}</p>
//               <p>📍 {company.location}</p>
//               <p>👥 {company.size}</p>
//               <a
//                 href={company.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-btn"
//               >
//                 Visit Website
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No companies found 🚫</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCompanies;

// src/pages/SearchCompanies.js

// import React, { useState } from "react";

// const allCompanies = [
//   { id: 1, name: "Tata Consultancy Services", industry: "Technology", location: "Mumbai, India", hqInIndia: true, website: "https://www.tcs.com" },
//   { id: 2, name: "Hindustan Unilever Limited", industry: "FMCG", location: "Mumbai, India", hqInIndia: true, website: "https://www.hul.co.in" },
//   { id: 3, name: "Microsoft India", industry: "Technology", location: "Hyderabad, India", hqInIndia: false, website: "https://www.microsoft.com" },
//   { id: 4, name: "Nestlé India", industry: "Food & Beverage", location: "Gurgaon, India", hqInIndia: false, website: "https://www.nestle.in" },
//   { id: 5, name: "IBM India", industry: "Technology", location: "Bengaluru, India", hqInIndia: false, website: "https://www.ibm.com" },
//   { id: 6, name: "Amazon India", industry: "E-Commerce / Cloud", location: "Bengaluru, India", hqInIndia: false, website: "https://www.amazon.in" },
//   { id: 7, name: "Coca-Cola India", industry: "Beverages", location: "Gurgaon, India", hqInIndia: false, website: "https://www.coca-colaindia.com" },
//   { id: 8, name: "Wipro", industry: "Technology", location: "Bengaluru, India", hqInIndia: true, website: "https://www.wipro.com" },
//   // ... add more up to 100
// ];

// const industries = Array.from(new Set(allCompanies.map(c => c.industry)));

// const SearchCompanies = () => {
//   const [search, setSearch] = useState("");
//   const [hqFilter, setHqFilter] = useState("all"); // "all", "hq", "offices"
//   const [industryFilter, setIndustryFilter] = useState("all");

//   const filtered = allCompanies.filter(company => {
//     const matchesSearch =
//       company.name.toLowerCase().includes(search.toLowerCase()) ||
//       company.industry.toLowerCase().includes(search.toLowerCase());

//     const matchesHq = 
//       hqFilter === "all" ||
//       (hqFilter === "hq" && company.hqInIndia) ||
//       (hqFilter === "offices" && !company.hqInIndia);

//     const matchesIndustry = industryFilter === "all" || company.industry === industryFilter;

//     return matchesSearch && matchesHq && matchesIndustry;
//   });

//   return (
//     <div className="companies-container">
//       <h2>🏢 Search Companies</h2>

//       {/* Filters */}
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search by name or industry..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="company-search-input"
//         />

//         <div className="filter-group">
//           <label>
//             <input
//               type="radio"
//               name="hqFilter"
//               value="all"
//               checked={hqFilter === "all"}
//               onChange={() => setHqFilter("all")}
//             />{" "}
//             All
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="hqFilter"
//               value="hq"
//               checked={hqFilter === "hq"}
//               onChange={() => setHqFilter("hq")}
//             />{" "}
//             Headquarters in India
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="hqFilter"
//               value="offices"
//               checked={hqFilter === "offices"}
//               onChange={() => setHqFilter("offices")}
//             />{" "}
//             Offices in India
//           </label>
//         </div>

//         <div className="filter-group">
//           <label>Industry:</label>
//           <select
//             value={industryFilter}
//             onChange={e => setIndustryFilter(e.target.value)}
//           >
//             <option value="all">All</option>
//             {industries.map(ind => (
//               <option key={ind} value={ind}>{ind}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="company-cards">
//         {filtered.length > 0 ? (
//           filtered.map(company => (
//             <div key={company.id} className="company-card">
//               <h3>{company.name}</h3>
//               <p>Industry: {company.industry}</p>
//               <p>Location: {company.location}</p>
//               <a href={company.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
//                 Visit Website
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No companies found matching filters 🚫</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCompanies;

// import React, { useState, useEffect } from "react";
// import companiesData from "../data/companies.json";

// const SearchCompanies = () => {
//   const [search, setSearch] = useState("");
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     setCompanies(companiesData);
//   }, []);

//   // Filter logic
//   const filteredCompanies = companies.filter(
//     (company) =>
//       company.name.toLowerCase().includes(search.toLowerCase()) ||
//       company.industry.toLowerCase().includes(search.toLowerCase()) ||
//       company.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="companies-container">
//       <h2>🏢 Search Companies</h2>
//       <input
//         type="text"
//         placeholder="Search by company, industry or location..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="company-search-input"
//       />

//       <div className="company-cards">
//         {filteredCompanies.length > 0 ? (
//           filteredCompanies.map((company) => (
//             <div key={company.id} className="company-card">
//               <h3>{company.name}</h3>
//               <p>💼 Industry: {company.industry}</p>
//               <p>📍 Location: {company.location}</p>
//               <p>👥 Size: {company.size}</p>
//               <p>⭐ Rating: {company.rating} / 5</p>
//               <p>📅 Founded: {company.foundedYear}</p>
//               <p>📢 Job Openings: {company.jobOpenings}</p>
//               <a
//                 href={company.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-btn"
//               >
//                 Visit Website
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No companies found 🚫</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCompanies;

// import React, { useState, useEffect } from "react";
// import companiesData from "../data/companies.json";

// const SearchCompanies = () => {
//   const [search, setSearch] = useState("");
//   const [companies, setCompanies] = useState([]);
//   const [ratingFilter, setRatingFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   useEffect(() => {
//     setCompanies(companiesData);
//   }, []);

//   // Extract unique locations for dropdown
//   const uniqueLocations = [...new Set(companiesData.map((c) => c.location))];

//   // Filtering logic
//   const filteredCompanies = companies.filter((company) => {
//     const matchesSearch =
//       company.name.toLowerCase().includes(search.toLowerCase()) ||
//       company.industry.toLowerCase().includes(search.toLowerCase()) ||
//       company.location.toLowerCase().includes(search.toLowerCase());

//     const matchesRating = ratingFilter
//       ? company.rating >= parseFloat(ratingFilter)
//       : true;

//     const matchesLocation = locationFilter
//       ? company.location === locationFilter
//       : true;

//     return matchesSearch && matchesRating && matchesLocation;
//   });

//   return (
//     <div className="companies-container">
//       <h2>🏢 Search Companies</h2>
//       <input
//         type="text"
//         placeholder="Search by company, industry or location..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="company-search-input"
//       />

//       {/* Filters */}
//       <div className="filters">
//         <select
//           value={ratingFilter}
//           onChange={(e) => setRatingFilter(e.target.value)}
//           className="filter-select"
//         >
//           <option value="">⭐ Filter by Rating</option>
//           <option value="4.5">4.5 & up</option>
//           <option value="4">4.0 & up</option>
//           <option value="3.5">3.5 & up</option>
//           <option value="3">3.0 & up</option>
//         </select>

//         <select
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//           className="filter-select"
//         >
//           <option value="">🌍 Filter by Location</option>
//           {uniqueLocations.map((loc, index) => (
//             <option key={index} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Results */}
//       <div className="company-cards">
//         {filteredCompanies.length > 0 ? (
//           filteredCompanies.map((company) => (
//             <div key={company.id} className="company-card">
//               <h3>{company.name}</h3>
//               <p>💼 Industry: {company.industry}</p>
//               <p>📍 Location: {company.location}</p>
//               <p>👥 Size: {company.size}</p>
//               <p>⭐ Rating: {company.rating} / 5</p>
//               <p>📅 Founded: {company.foundedYear}</p>
//               <p>📢 Job Openings: {company.jobOpenings}</p>
//               <a
//                 href={company.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-btn"
//               >
//                 Visit Website
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No companies found 🚫</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCompanies;

// import React, { useState, useEffect } from "react";
// import companiesData from "../data/companies.json";

// const SearchCompanies = () => {
//   const [search, setSearch] = useState("");
//   const [companies, setCompanies] = useState([]);
//   const [ratingFilter, setRatingFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   useEffect(() => {
//     setCompanies(companiesData);
//   }, []);

//   const uniqueLocations = [...new Set(companiesData.map((c) => c.location))];

//   const filteredCompanies = companies.filter((company) => {
//     const matchesSearch =
//       company.name.toLowerCase().includes(search.toLowerCase()) ||
//       company.industry.toLowerCase().includes(search.toLowerCase()) ||
//       company.location.toLowerCase().includes(search.toLowerCase());

//     const matchesRating = ratingFilter
//       ? company.rating >= parseFloat(ratingFilter)
//       : true;

//     const matchesLocation = locationFilter
//       ? company.location === locationFilter
//       : true;

//     return matchesSearch && matchesRating && matchesLocation;
//   });

//   return (
//     <div className="companies-container">
//       <h2>🏢 Search Companies</h2>

//       {/* Combined Search + Filters */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="🔍 Search by name, industry or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-input"
//         />

//         <select
//           value={ratingFilter}
//           onChange={(e) => setRatingFilter(e.target.value)}
//           className="search-select"
//         >
//           <option value="">⭐ Rating</option>
//           <option value="4.5">4.5 & up</option>
//           <option value="4">4.0 & up</option>
//           <option value="3.5">3.5 & up</option>
//           <option value="3">3.0 & up</option>
//         </select>

//         <select
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//           className="search-select"
//         >
//           <option value="">🌍 Location</option>
//           {uniqueLocations.map((loc, index) => (
//             <option key={index} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Results */}
//       <div className="company-cards">
//         {filteredCompanies.length > 0 ? (
//           filteredCompanies.map((company) => (
//             <div key={company.id} className="company-card">
//               <h3>{company.name}</h3>
//               <p>💼 Industry: {company.industry}</p>
//               <p>📍 Location: {company.location}</p>
//               <p>👥 Size: {company.size}</p>
//               <p>⭐ Rating: {company.rating} / 5</p>
//               <p>📅 Founded: {company.foundedYear}</p>
//               <p>📢 Job Openings: {company.jobOpenings}</p>
//               <a
//                 href={company.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-btn"
//               >
//                 Visit Website
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No companies found 🚫</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCompanies;

import React, { useState, useEffect } from "react";
import companiesData from "../data/companies.json";

const SearchCompanies = () => {
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  const uniqueLocations = [...new Set(companiesData.map((c) => c.location))];

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.industry.toLowerCase().includes(search.toLowerCase()) ||
      company.location.toLowerCase().includes(search.toLowerCase());

    const matchesRating = ratingFilter
      ? company.rating >= parseFloat(ratingFilter)
      : true;

    const matchesLocation = locationFilter
      ? company.location === locationFilter
      : true;

    return matchesSearch && matchesRating && matchesLocation;
  });

  return (
    <div className="companies-container">
      <h2>🏢 Search Companies</h2>

      {/* Centered Search Bar */}
      <div className="search-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search by name, industry or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="search-select"
          >
            <option value="">⭐ Rating</option>
            <option value="4.5">4.5 & up</option>
            <option value="4">4.0 & up</option>
            <option value="3.5">3.5 & up</option>
            <option value="3">3.0 & up</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="search-select"
          >
            <option value="">🌍 Location</option>
            {uniqueLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="company-cards">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div key={company.id} className="company-card">
              <h3>{company.name}</h3>
              <p>💼 Industry: {company.industry}</p>
              <p>📍 Location: {company.location}</p>
              <p>👥 Size: {company.size}</p>
              <p>⭐ Rating: {company.rating} / 5</p>
              <p>📅 Founded: {company.foundedYear}</p>
              <p>📢 Job Openings: {company.jobOpenings}</p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Website
              </a>
            </div>
          ))
        ) : (
          <p className="no-results">No companies found 🚫</p>
        )}
      </div>
    </div>
  );
};

export default SearchCompanies;

