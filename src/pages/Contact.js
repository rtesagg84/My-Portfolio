import React, { Component } from "react";
class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: ""
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: ""
    });
  };

  render() {
    return (
      <section className="contact-section">
        <h3>Contact</h3>
        <h4 style={{ textAlign: "center", fontWeight: "inherit" }}>
          {" "}
          Hi I'm Aster, I'm a fullstack web developer who enjoys working with
          new technologies.... i'd love to work with you. Get in touch with me
          through this form
        </h4>
        <br />
        <form
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
        </form>
      </section>
    );
  }
}
export default Contact;
