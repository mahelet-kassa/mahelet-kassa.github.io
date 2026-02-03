import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Allow Me To Introduce Myself.</h1>
          <div className="intro-info">
            <img src="images/Mahi-profile.jpg" alt="Mahelet Kassa - Full Stack Software Engineer" loading="lazy" />
            <p className="lead">A full stack web developer!</p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-twelve tab-full">
          <h3>About Me</h3>
          <p>
            I'm a Full Stack Software Engineer with a Bachelor's in Computer Science and 
            Business Administration. I combine strong technical expertise with a deep understanding
            of business operations to build software solutions that are both effective and aligned
            with organizational goals. I'm currently expanding my skills in AI and machine learning
            as part of my ongoing learning journey. Outside of work, I'm focused on learning new
            technologies, developing personal projects, climbing, reading, and growing my Ethiopian coffee venture.
          </p>
          <p>
            As a full-stack software engineer proficient in multiple programming
            languages and frameworks, I consistently pursue new technologies and
            keep abreast of industry trends and innovations. My goal is to create
            applications that enhance company productivity, efficiency, and social impact.
            This ambition aligns with my passion and vision
            for using technology in business to promote social good.
          </p>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <p>Want to learn more?</p>
          <a
            href="mailto:maheletkassa1@gmail.com"
            target="_top"
            title="Email Me"
            className="button button-primary"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

