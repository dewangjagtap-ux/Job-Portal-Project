import { useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const addJob = () => {
    setJobs([...jobs, { title, company }]);
    setTitle("");
    setCompany("");
  };

  return (
    <div>
      <h1>Jobs</h1>

      <input
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={addJob}>Add Job</button>

      <hr />

      {jobs.map((job, index) => (
        <div key={index}>
          <p>{job.title} - {job.company}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
