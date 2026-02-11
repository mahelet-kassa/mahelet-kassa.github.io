import React from 'react'

const Skills = () => {
  const skills = [
    { icon: 'devicon-html5-plain colored', name: 'HTML5' },
    { icon: 'devicon-css3-plain colored', name: 'CSS3' },
    { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
    { icon: 'devicon-react-original colored', name: 'React' },
    { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
    { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
    { icon: 'devicon-express-original', name: 'Express' },
    { icon: 'devicon-java-plain colored', name: 'Java' },
    { icon: 'devicon-spring-plain colored', name: 'Spring Boot' },
    { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
    { icon: 'devicon-amazonwebservices-original colored', name: 'AWS' },
    { icon: 'devicon-docker-plain colored', name: 'Docker' },
    { icon: 'devicon-git-plain colored', name: 'Git' },
    { icon: 'devicon-ruby-plain colored', name: 'Ruby' },
    { icon: 'devicon-rails-plain colored', name: 'Rails' },
    { icon: 'devicon-sass-original colored', name: 'Sass' },
    { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    { icon: 'devicon-jquery-plain colored', name: 'jQuery' },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-overlay"></div>
      <div className="skills-container">
        <div className="skills-header">
          <h5>Technical Skills</h5>
          <h2>Technologies I Work With</h2>
          <p>Building modern, scalable applications with these tools and technologies</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
