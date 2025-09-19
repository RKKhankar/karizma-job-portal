// import React from "react";

// const SearchJobs = () => <h1>Search Jobs Page 🔍</h1>;

// export default SearchJobs;
import React, { useState } from "react";

const SearchJobs = () => {
  const [search, setSearch] = useState("");

  // Dummy job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹12-18 LPA",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Amazon",
      location: "Hyderabad, India",
      salary: "₹15-22 LPA",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Remote",
      salary: "₹10-15 LPA",
      type: "Contract",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h2>🔍 Search Jobs</h2>
      <input
        type="text"
        placeholder="Search by role, company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="job-search-input"
      />

      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>🏢 {job.company}</p>
              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>
              <p>🕒 {job.type}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs found 🚫</p>
        )}
      </div>
    </div>
  );
};

export default SearchJobs;
