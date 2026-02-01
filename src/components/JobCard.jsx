function JobCard({ title, company, score }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{company}</p>
      <p><strong>AI Match:</strong> {score}%</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;
