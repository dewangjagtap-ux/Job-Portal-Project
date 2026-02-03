function Sidebar({ onNavigate = () => {}, user = null, onLoginToggle = () => {} }) {
  return (
    <div className="sidebar">
      <h2>PlacementHub</h2>

      <nav>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("dashboard");
          }}
        >
          Dashboard
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("jobs");
          }}
        >
          Jobs
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("applications");
          }}
        >
          Applications
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("profile");
          }}
        >
          Profile
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("admin");
          }}
        >
          Admin
        </a>
      </nav>

      <div style={{ marginTop: 20 }}>
        {user ? (
          <div>
            <div style={{ fontSize: 14, marginBottom: 6 }}>Signed in as</div>
            <strong>{user.name}</strong>
            <div style={{ marginTop: 8 }}>
              <button onClick={onLoginToggle}>Logout</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={onLoginToggle}>Login (demo)</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
