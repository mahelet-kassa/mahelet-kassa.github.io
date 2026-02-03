import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const items = slider.querySelectorAll('.skill')
    const totalItems = items.length

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems)
    }, 3000)

    // Update visible items
    items.forEach((item, i) => {
      const offset = (i - currentIndex + totalItems) % totalItems
      if (offset === 0) {
        item.style.display = 'block'
        item.style.opacity = '1'
      } else {
        item.style.display = 'none'
      }
    })

    return () => {
      clearInterval(interval)
    }
  }, [currentIndex])

  const skills = [
    [
      { icon: 'devicon-html5-plain colored', name: 'HTML' },
      { icon: 'devicon-css3-plain colored', name: 'CSS' },
    ],
    [
      { icon: 'devicon-sass-original colored', name: 'Sass' },
      { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    ],
    [
      { icon: 'devicon-jquery-plain colored', name: 'jQuery' },
      { icon: 'devicon-ruby-plain colored', name: 'Ruby' },
    ],
    [
      { icon: 'devicon-rails-plain colored', name: 'Ruby on Rails' },
      { icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
    ],
    [
      { icon: 'devicon-react-original colored', name: 'React' },
      { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    ],
    [
      { icon: 'devicon-grunt-line colored', name: 'Express' },
      { icon: 'devicon-nodejs-plain', name: 'NodeJS' },
    ],
    [
      { icon: 'devicon-amazonwebservices-plain colored', name: 'AWS' },
      { icon: 'devicon-java-plain colored', name: 'Java' },
    ],
    [
      { icon: 'fa fa-leaf', name: 'Spring Boot' },
      { icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
    ],
    [
      { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
      { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    ],
    [
      { icon: 'devicon-docker-plain colored', name: 'Docker' },
      { icon: 'devicon-git-plain colored', name: 'Git' },
    ],
  ]

  return (
    <section id="skills">
      <div className="overlay"></div>
      <div className="row skills-content">
        <div ref={sliderRef} id="owl-slider" className="owl-carousel skills-list">
          {skills.map((skillPair, index) => (
            <div key={index} className="skill">
              {skillPair.map((skill, i) => (
                <React.Fragment key={i}>
                  <i className={skill.icon}></i>
                  <div className="skill-content">
                    <h3>{skill.name}</h3>
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="row skills-details">
        <div className="col-twelve"></div>
      </div>
    </section>
  )
}

export default Skills

