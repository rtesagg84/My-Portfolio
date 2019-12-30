import React, { Component } from 'react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: ''
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: ''
    })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render () {
    return (
      <section className='contact-section'>
        <h3>Contact</h3>
        <h4 style={{ textAlign: 'center', fontWeight: 'inherit' }}>
          &nbsp; Hi I'm Aster, I'm a full-stack web developer who enjoys working
          with new technologies.... I'd love to work with you. Get in touch with
          me through this form.
        </h4>
        <br />

        <form onSubmit={this.handleSubmit} id='contact-form' className='form'>
          <input type='hidden' name='form-name' value='contact' />
          <div className='id'>
            <div className='name'>
              <label>
                Your Name:{' '}
                <input
                  className='name'
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </label>
            </div>
            <div className='email'>
              <label>
                Your Email:{' '}
                <input
                  className='email'
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </label>
            </div>
          </div>
          <div className='content'>
            <label>
              Message:{' '}
              <textarea
                cols={30}
                rows={10}
                name='message'
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
                required
              />
            </label>
            <div className='button--container'>
              <button type='submit'>Send</button>
            </div>
          </div>
        </form>

        {/* <form
          name="contact-form"
          data-netlify="true"
          netlify-honeypot="honeypot"
          id="contact-form"
          method="POST"
          className="form"
        >
          <div className="id">
            <div className="name">
              <label htmlFor="name">Name</label>

              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                className="name"
                type="text"
                placeholder="Your Name"
                value={this.state.name}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>

              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                className="email"
                type="email"
                placeholder="your@email.com"
                required
                value={this.state.email}
              />
            </div>
          </div>

          <div className="content">
            <label htmlFor="content">Content</label>

            <textarea
              onChange={e => this.setState({ message: e.target.value })}
              cols={30}
              rows={10}
              name="content"
              type="text"
              placeholder="Please write your message here"
              value={this.state.message}
              required
            />
            <div className="field">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <div className="button--container">
              <button type="submit">Submit form!!</button>
            </div>
          </div>
        </form> */}
      </section>
    )
  }
}
export default Contact
