// import React from "react";

// const CompanyLists = () => <h1>Company Lists 📋</h1>;

// export default CompanyLists;
import React, { useState } from "react";
import companiesData from "../data/lookupCompanies.json";
import "../pages/CompanyLists.css";

const CompanyList = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Filter + sort
  const filteredCompanies = companiesData
    .filter((company) =>
      company.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "industry") return a.industry.localeCompare(b.industry);
      if (sortBy === "employees") {
        const empA = parseInt(a.employees.replace(/\D/g, "")) || 0;
        const empB = parseInt(b.employees.replace(/\D/g, "")) || 0;
        return empB - empA;
      }
      return 0;
    });

  return (
    <div className="companylist-container">
      <h1>🏢 Company Directory</h1>
      <p className="subtitle">
        Browse through a list of top companies enriched with valuable details.
      </p>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="industry">Sort by Industry</option>
          <option value="employees">Sort by Employees</option>
        </select>
      </div>

      {/* Table */}
      <table className="company-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>HQ</th>
            <th>Employees</th>
            <th>Revenue</th>
            <th>Rating</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.industry}</td>
                <td>{c.hq}</td>
                <td>{c.employees}</td>
                <td>{c.revenue}</td>
                <td>{c.rating}</td>
                <td>
                  {c.website ? (
                    <a href={c.website} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-results">
                No companies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
