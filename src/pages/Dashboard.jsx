import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import ResumeAI from "../components/ResumeAI";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <div className="main-left">
          <header className="page-header">
            <h2>Student Dashboard</h2>
          </header>

          <div className="top-cards">
            <div className="resume-card card">
              <h3>Your Resume Strength</h3>
              <div className="resume-percent">85%</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>
              <p className="muted">Improve by adding more projects and keywords.</p>
            </div>

            <div className="interview-card card">
              <h3>AI Interview Practice</h3>
              <p className="muted">Practice common interview questions with our AI mock interviewer.</p>
              <button className="primary">Start Mock Interview</button>
            </div>
          </div>

          <section className="recommended card">
            <h3>Recommended Jobs</h3>
            <div className="job-grid">
              <JobCard title="Frontend Developer" company="ABC Tech" score="95" />
              <JobCard title="Backend Developer" company="XYZ Solutions" score="80" />
              <JobCard title="Data Analyst" company="DataCorp" score="75" />
              <JobCard title="UI/UX Designer" company="Creative Co" score="88" />
            </div>
          </section>

          <section className="resume-ai card">
            <ResumeAI />
          </section>
        </div>

        <aside className="right-col">
          <div className="status card">
            <h4>Application Status</h4>
            <ul>
              <li><span className="status-dot applied"></span> Applied</li>
              <li><span className="status-dot shortlisted"></span> Shortlisted</li>
              <li><span className="status-dot interview"></span> Interview</li>
              <li><span className="status-dot offer"></span> Offer</li>
            </ul>
          </div>

          <div className="notifications card">
            <h4>Notifications</h4>
            <ul>
              <li>Your job application for TCS was viewed.</li>
              <li>New interview invitation from XYZ Solutions.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
