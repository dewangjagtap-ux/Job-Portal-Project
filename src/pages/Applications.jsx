import { useState } from "react";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const applyJob = () => {
    setApplications([
      ...applications,
      { company: "Demo Company", status: "Applied" }
    ]);
  };

  return (
    <div>
      <h1>Applications</h1>

      <button onClick={applyJob}>Apply to Demo Job</button>

      <ul>
        {applications.map((app, index) => (
          <li key={index}>
            {app.company} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
