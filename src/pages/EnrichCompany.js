// import React from "react";

// const EnrichCompany = () => <h1>Enrich Company Data 📊</h1>;

// export default EnrichCompany;

// import React, { useState } from "react";
// import "../pages/EnrichCompany.css";

// const EnrichCompany = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     industry: "",
//     hq: "",
//     employees: "",
//     revenue: "",
//     rating: "",
//     website: "",
//     description: ""
//   });

//   const [companies, setCompanies] = useState([]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name.trim()) return;
//     setCompanies([...companies, formData]);
//     setFormData({
//       name: "",
//       industry: "",
//       hq: "",
//       employees: "",
//       revenue: "",
//       rating: "",
//       website: "",
//       description: ""
//     });
//   };

//   return (
//     <div className="enrich-container">
//       <h1>Enrich Company Data 📊</h1>
//       <p className="subtitle">
//         Add valuable information about companies to help job seekers and recruiters.
//       </p>

//       {/* Form */}
//       <form className="enrich-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Company Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="industry"
//           placeholder="Industry"
//           value={formData.industry}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="hq"
//           placeholder="Headquarters"
//           value={formData.hq}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="employees"
//           placeholder="Employees"
//           value={formData.employees}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="revenue"
//           placeholder="Revenue"
//           value={formData.revenue}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="rating"
//           placeholder="Rating"
//           value={formData.rating}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="website"
//           placeholder="Website URL"
//           value={formData.website}
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           rows="3"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit">Add Company</button>
//       </form>

//       {/* Display Cards */}
//       <div className="company-cards">
//         {companies.length === 0 ? (
//           <p className="placeholder">No enriched company data yet. Add one above!</p>
//         ) : (
//           companies.map((c, index) => (
//             <div key={index} className="company-card">
//               <h2>{c.name}</h2>
//               <p><strong>Industry:</strong> {c.industry}</p>
//               <p><strong>HQ:</strong> {c.hq}</p>
//               <p><strong>Employees:</strong> {c.employees}</p>
//               <p><strong>Revenue:</strong> {c.revenue}</p>
//               <p><strong>Rating:</strong> {c.rating}</p>
//               <p><strong>Description:</strong> {c.description}</p>
//               {c.website && (
//                 <a href={c.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
//                   Visit Website
//                 </a>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnrichCompany;
import React, { useState, useEffect } from "react";
import companiesData from "../data/lookupCompanies.json";
import "../pages/EnrichCompany.css";

const EnrichCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    hq: "",
    employees: "",
    revenue: "",
    rating: "",
    website: "",
    description: ""
  });

  useEffect(() => {
    setCompanies(companiesData); // Load initial dataset
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newCompany = { ...formData };
    setCompanies([...companies, newCompany]);

    // reset form
    setFormData({
      name: "",
      industry: "",
      hq: "",
      employees: "",
      revenue: "",
      rating: "",
      website: "",
      description: ""
    });
  };

  return (
    <div className="enrich-container">
      <h1>Enrich Company Data 📊</h1>
      <p className="subtitle">
        Add valuable information about companies to help job seekers and recruiters.
      </p>

      {/* Form */}
      <form className="enrich-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={formData.industry}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hq"
          placeholder="Headquarters"
          value={formData.hq}
          onChange={handleChange}
        />
        <input
          type="text"
          name="employees"
          placeholder="Employees"
          value={formData.employees}
          onChange={handleChange}
        />
        <input
          type="text"
          name="revenue"
          placeholder="Revenue"
          value={formData.revenue}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          value={formData.website}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Company</button>
      </form>

      {/* Display Cards */}
      <div className="company-cards">
        {companies.length === 0 ? (
          <p className="placeholder">No company data yet. Add one above!</p>
        ) : (
          companies.map((c, index) => (
            <div key={index} className="company-card">
              <h2>{c.name}</h2>
              <p><strong>Industry:</strong> {c.industry}</p>
              <p><strong>HQ:</strong> {c.hq}</p>
              <p><strong>Employees:</strong> {c.employees}</p>
              <p><strong>Revenue:</strong> {c.revenue}</p>
              <p><strong>Rating:</strong> {c.rating}</p>
              <p><strong>Description:</strong> {c.description}</p>
              {c.website && (
                <a href={c.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
                  Visit Website
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EnrichCompany;
