import './AboutPage.css';

function AboutPage() {
  return (
    <div className="notebook-page">
      <div className="about-header">
        <span className="page-icon">📋</span>
        <h1>About Wha-To-Do</h1>
      </div>

      <div className="about-content">
        <p className="intro">
          Welcome to <strong>Wha-To-Do</strong> — your friendly companion for staying organized 
          and getting things done. Built with simplicity and efficiency in mind, 
          this app helps you keep track of your daily tasks without the clutter.
        </p>

        <div className="features-section">
          <h2>✨ Key Features</h2>
          <ul className="features-list">
            <li>
              
              <span><strong>Add tasks</strong> — Quickly jot down what you need to do</span>
            </li>
            <li>
              
              <span><strong>Mark tasks complete</strong> — Celebrate your progress</span>
            </li>
            <li>
              
              <span><strong>Delete tasks</strong> — Remove what's no longer needed</span>
            </li>
            <li>
              
              <span><strong>Auto-save</strong> — Your tasks are stored locally in your browser</span>
            </li>
          </ul>
        </div>

        <div className="tech-stack">
          <p className="tech-note">
            Built with <span className="tech-badge">React</span> and powered by 
            <span className="tech-badge">Local Storage</span> 
            — no sign-up required, just open and go!
          </p>
        </div>

        <div className="footer-note">
          <p>✨ Stay productive, stay organized! ✨</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;