function JobCard({ title, company, score }) {
  return (
    <div className="card job-card">
      <div className="job-card-left">
        <h4 className="job-title">{title}</h4>
        <p className="job-company">{company}</p>
      </div>

      <div className="job-card-right">
        <div className="match-badge" aria-hidden>
          <span className="match-percent">{score}%</span>
        </div>

        <div className="job-actions">
          <button className="secondary">View Details</button>
          <button className="primary">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
