import UserContext from '../context/UserContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom';


import './HomePage.css'
function HomePage(){
    const {user ,updateUser}  = useContext(UserContext);

    return (
    <>
    <div className="notebook-wrapper">
    <div className="notebook-page">
    <div className="home-container">
        
        
        <section className="hero-section">
            <div className="hero-content">
                  <h1 className="hero-title">
                  {user?.name ? (
                    <>
                      Welcome back, <span>{user.name}</span>
                    </>
                  ) : (
                    <>
                      Welcome to <span>Wha-To-Do</span>
                    </>
                  )}
                  
                </h1>
                
                <p className="hero-subtitle">
                  {user?.name ? `What are we accomplishing today?` : 'Your personal productivity companion'}
                </p>
                <p className="hero-description">
                  Organize your tasks, boost your productivity, and achieve your goals 
                  with our simple yet powerful todo management system.
                </p>
            </div>
            <div className="hero-actions">
                {user?.name ? (<button onClick={()=>{
                      localStorage.removeItem("user");
                      updateUser("");
                      window.location.reload();}}  className='change-button'>
                  Change User</button> 
                  ) : (
                  <div className="name-input-container">

                      <input type="text"
                        placeholder="Enter your name"
                        className="name-input"
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                              updateUser(e.target.value.trim());
                            }
                        }}
                      />
                      <span className="input-hint">Press Enter to continue</span>

                  </div>
                )}
            </div>
            <div className="feature-cards">

    <div className="feature-card">
        <span>📝</span>
        <h3>Organize</h3>
        <p>Keep all tasks in one place</p>
    </div>

    <div className="feature-card">
        <span>✅</span>
        <h3>Track</h3>
        <p>Mark progress easily</p>
    </div>

    <div className="feature-card">
        <span>☕</span>
        <h3>Focus</h3>
        <p>Stay productive daily</p>
    </div>

</div>
            <div className="hero-buttons">
            <Link to="/todos" className="btn btn-primary">
              Get Started
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </section>
        </div>
    </div>
    </div>    
    </>
    )
}

export default HomePage