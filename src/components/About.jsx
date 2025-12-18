import "./About.css";

export default function About({ onClose }) {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="about-header">
          <img src="/logo_new.jpg" alt="Divyansh Kakkar" className="about-avatar" />
          <h1>Divyansh Kakkar</h1>
          <p className="about-subtitle">Full Stack Developer | MERN Stack Enthusiast</p>
          <p className="about-location">
            <i className="fas fa-map-marker-alt"></i> Greater Noida, Uttar Pradesh, India
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2><i className="fas fa-user"></i> About Me</h2>
            <p>
              Hi! I'm Divyansh Kakkar, a passionate Full Stack Developer and Computer Science student at Galgotias University. 
              I specialize in building modern web applications using the MERN stack and cloud technologies. 
              With strong fundamentals in computer science and hands-on experience in AWS, I love creating 
              seamless user experiences and solving real-world problems through code.
            </p>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            <div className="education-card">
              <h3>Galgotias University</h3>
              <p className="degree">B.Tech in Computer Science</p>
              <p className="duration">Aug 2022 — June 2026</p>
            </div>
            <div className="education-card">
              <h3>J.P. Academy</h3>
              <p className="degree">Higher Secondary Education (Class XII) - 2021</p>
              <p className="degree">Secondary Education (Class X) - 2019</p>
            </div>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-project-diagram"></i> Featured Projects</h2>
            
            <div className="project-card">
              <h3>🎵 BeatBox – Music Streaming Web App</h3>
              <p className="project-duration">Apr 2025 – May 2025</p>
              <p className="project-desc">
                A full-stack music streaming platform with user authentication, favorites management, 
                and a beautiful dark-themed UI with real-time playback controls.
              </p>
              <ul className="project-highlights">
                <li>✅ Song playback controls, progress bar, and dynamic playlist generation</li>
                <li>✅ JWT-based authentication system with secure session handling</li>
                <li>✅ Interactive UI with hover effects, animations, and mobile compatibility</li>
                <li>✅ 4 custom themes (Dark, Light, Purple, Blue)</li>
                <li>✅ Integrated search functionality to find and play songs instantly</li>
                <li>✅ Favorites system with localStorage and toast notifications</li>
              </ul>
              <div className="project-features">
                <span className="feature-tag">React</span>
                <span className="feature-tag">Node.js</span>
                <span className="feature-tag">Express</span>
                <span className="feature-tag">MongoDB</span>
                <span className="feature-tag">JWT</span>
                <span className="feature-tag">CSS3</span>
              </div>
            </div>

            <div className="project-card">
              <h3>☁️ CloudDrive - Secure File Storage System</h3>
              <p className="project-duration">Ongoing</p>
              <p className="project-desc">
                A full-stack cloud storage application with secure file management using Flask and AWS S3.
              </p>
              <ul className="project-highlights">
                <li>✅ Secure file upload/download functionality with AWS S3 integration</li>
                <li>✅ RESTful API with endpoints for file management (upload, list, download, delete)</li>
                <li>✅ Security best practices: CORS protection, secure filename handling, file validation</li>
                <li>✅ Responsive drag-and-drop UI with real-time file validation</li>
                <li>✅ File size limit enforcement (16MB) with user-friendly error messages</li>
              </ul>
              <div className="project-features">
                <span className="feature-tag">React</span>
                <span className="feature-tag">Python Flask</span>
                <span className="feature-tag">AWS S3</span>
                <span className="feature-tag">AWS IAM</span>
                <span className="feature-tag">Tailwind CSS</span>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-code"></i> Technical Skills</h2>
            
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <i className="fab fa-js"></i>
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-code"></i>
                  <span>C++</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-code"></i>
                  <span>C</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Frameworks & Tools</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <i className="fab fa-react"></i>
                  <span>React.js</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-flask"></i>
                  <span>Flask</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-wind"></i>
                  <span>Tailwind CSS</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-git-alt"></i>
                  <span>Git</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Databases & Cloud</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <span>MySQL</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS S3</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS IAM</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
            <div className="experience-card">
              <h3>AICTE AWS Cloud — Virtual Internship</h3>
              <p className="duration">2023</p>
              <p className="description">Gained hands-on experience with AWS cloud services and infrastructure.</p>
            </div>
            <div className="experience-card">
              <h3>AICTE Google AI-ML — Virtual Internship</h3>
              <p className="duration">2024</p>
              <p className="description">Worked on AI/ML projects and learned industry best practices.</p>
            </div>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-trophy"></i> Achievements & Certifications</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <i className="fas fa-certificate"></i>
                <span>Software Engineering - NPTEL Swayam</span>
              </div>
              <div className="achievement-item">
                <i className="fas fa-certificate"></i>
                <span>Python Programming - Infosys Springboard</span>
              </div>
              <div className="achievement-item">
                <i className="fas fa-certificate"></i>
                <span>Computer Network - Cisco Networking Academy</span>
              </div>
              <div className="achievement-item">
                <i className="fas fa-code"></i>
                <span>Hackathon Participant - Tech Problem-Solving Events</span>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2><i className="fas fa-link"></i> Connect With Me</h2>
            <div className="social-links">
              <a 
                href="https://github.com/divyansh3030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/divyansh-kakkar-20567626b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:divyanshkakkar30@gmail.com"
                className="social-btn email"
              >
                <i className="fas fa-envelope"></i>
                <span>Email Me</span>
              </a>
            </div>
          </section>

          <section className="about-section contact-info">
            <h2><i className="fas fa-address-card"></i> Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>divyanshkakkar30@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location</strong>
                  <p>Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="about-footer">
          <p>💚 Made with passion by Divyansh Kakkar | B.Tech CSE @ Galgotias University</p>
        </div>
      </div>
    </div>
  );
}