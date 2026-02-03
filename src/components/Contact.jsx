import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="row contact-info">
        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="material-icons">mail_outline</i>
          </div>
          <h5>Email</h5>
          <a
            href="mailto:maheletkassa1@gmail.com"
            target="_top"
            title="Email Me"
            style={{ color: 'grey' }}
          >
            <u>maheletkassa1@gmail.com</u>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

