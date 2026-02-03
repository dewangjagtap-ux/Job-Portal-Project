import { useState } from "react";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import ResumeAI from "../components/ResumeAI";
import Jobs from "./Jobs";
import Applications from "./Applications";
import Profile from "./Profile";
import Admin from "./Admin";
import "./Dashboard.css";

function Dashboard() {
  // Dummy data (will come from backend later)
  const [page, setPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  const resumeStrength = 85;

  const recommendedJobs = [
    { title: "Frontend Developer", company: "ABC Tech", score: 95 },
    { title: "Backend Developer", company: "XYZ Solutions", score: 80 },
    { title: "Data Analyst", company: "DataCorp", score: 75 },
    { title: "UI/UX Designer", company: "Creative Co", score: 88 },
  ];

  const handleNavigate = (to) => {
    // simple protection for admin
    if (to === "admin" && (!user || user.role !== "admin")) {
      // set to admin page but render access denied, or optionally alert
      setPage("admin");
      return;
    }

    setPage(to);
  };

  const handleLoginToggle = () => {
    if (user) {
      setUser(null);
      // after logout, go back to dashboard
      setPage("dashboard");
      return;
    }

    // Demo login: ask whether to login as admin or student
    const asAdmin = window.confirm(
      "Press OK to login as admin, Cancel to login as student (demo)."
    );

    if (asAdmin) {
      setUser({ name: "Demo Admin", role: "admin" });
    } else {
      setUser({ name: "Demo Student", role: "student" });
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onNavigate={handleNavigate} user={user} onLoginToggle={handleLoginToggle} />

      <div className="main">
        {/* conditional rendering depending on selected page */}
        {page === "dashboard" && (
          <>
            {/* LEFT SIDE */}
            <div className="main-left">
              <header className="page-header">
                <h2>Student Dashboard</h2>
                <p className="muted">Overview of your placement activities</p>
              </header>

              {/* TOP CARDS */}
              <div className="top-cards">
                {/* Resume Strength */}
                <div className="card resume-card">
                  <h3>Your Resume Strength</h3>
                  <div className="resume-percent">{resumeStrength}%</div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${resumeStrength}%` }}
                    ></div>
                  </div>

                  <p className="muted">
                    Improve by adding more projects, skills, and keywords.
                  </p>
                </div>

                {/* AI Interview */}
                <div className="card interview-card">
                  <h3>AI Interview Practice</h3>
                  <p className="muted">
                    Practice common interview questions with AI feedback.
                  </p>
                  <button className="primary">Start Mock Interview</button>
                </div>
              </div>

              {/* RECOMMENDED JOBS */}
              <section className="card recommended">
                <h3>Recommended Jobs</h3>

                <div className="job-grid">
                  {recommendedJobs.map((job, index) => (
                    <JobCard
                      key={index}
                      title={job.title}
                      company={job.company}
                      score={job.score}
                    />
                  ))}
                </div>
              </section>

              {/* RESUME AI */}
              <section className="card resume-ai">
                <ResumeAI />
              </section>
            </div>

            {/* RIGHT SIDE */}
            <aside className="right-col">
              {/* Application Status */}
              <div className="card status">
                <h4>Application Status</h4>
                <ul>
                  <li>
                    <span className="status-dot applied"></span> Applied
                  </li>
                  <li>
                    <span className="status-dot shortlisted"></span> Shortlisted
                  </li>
                  <li>
                    <span className="status-dot interview"></span> Interview
                  </li>
                  <li>
                    <span className="status-dot offer"></span> Offer
                  </li>
                </ul>
              </div>

              {/* Notifications */}
              <div className="card notifications">
                <h4>Notifications</h4>
                <ul>
                  <li>Your application at TCS was viewed</li>
                  <li>Interview invite from XYZ Solutions</li>
                  <li>New jobs matching your profile</li>
                </ul>
              </div>
            </aside>
          </>
        )}

        {page === "jobs" && (
          <div className="page-content">
            <Jobs />
          </div>
        )}

        {page === "applications" && (
          <div className="page-content">
            <Applications />
          </div>
        )}

        {page === "profile" && (
          <div className="page-content">
            <Profile />
          </div>
        )}

        {page === "admin" && (
          <div className="page-content">
            {user && user.role === "admin" ? (
              <Admin />
            ) : (
              <div className="card">
                <h3>Access Denied</h3>
                <p>You must be an admin to view the Admin panel.</p>
                <p>Click Login and choose admin (demo) to view.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
