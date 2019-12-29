 import React, { Component } from "react";
 /*class Contact extends Component {
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
        <h4 style={{textAlign:"center",fontWeight:"inherit",}}> Hi I'm Aster, I'm a fullstack  web developer who enjoys working with new technologies.... i'd love to work with you. Get in touch with me through this form</h4><br/>
        <form
          name="contact"
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

            <div className="button--container">
              <button type="submit">Submit form!!</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
export default Contact;*/


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}
export default Contact;



