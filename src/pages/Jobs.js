const jobs = [
  { 
    id: 1, 
    title: "Frontend Developer", 
    company: "Tech Corp", 
    description: "Build UI with React.", 
    applyUrl: "https://www.linkedin.com/jobs/view/1234567890" 
  },
  { 
    id: 2, 
    title: "Backend Developer", 
    company: "Code Ltd", 
    description: "Work on Node.js APIs.", 
    applyUrl: "https://www.linkedin.com/jobs/view/2345678901" 
  },
  { 
    id: 3, 
    title: "UI/UX Designer", 
    company: "DesignPro", 
    description: "Create user-friendly designs.", 
    applyUrl: "https://www.linkedin.com/jobs/view/3456789012" 
  },
];

export default function Jobs() {
  return (
    <div className="container">
      <h1>Available Jobs</h1>
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <small>Company: {job.company}</small>
          <br />
          <a 
            href={job.applyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button>Apply on LinkedIn</button>
          </a>
        </div>
      ))}
    </div>
  );
}
