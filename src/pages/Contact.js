import React, { Component } from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: ""
  };
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
          &nbsp; Hi I'm Aster, I'm a software engineer who enjoys working
          with new technologies.... I'd love to work with you. Get in touch with
          me through this form.
        </h4>

        <form onSubmit={this.handleSubmit} id="contact-form" className="form">
          <input type="hidden" name="form-name" value="contact" />
          <div className="id">
            <div className="name">
              <label>
                Your Name:{" "}
                <input
                  className="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </label>
            </div>

            <div className="email">
              <label>
                Your Email:{" "}
                <input
                  className="email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="your@email.com"
                  onChange={e => this.setState({ email: e.target.value })}
                  required
                />
              </label>
            </div>
          </div>

          <div className="content">
            <label>
              Message:{" "}
              <textarea
                cols={100}
                rows={10}
                name="message"
                value={this.state.message}
                placeholder="Please write your message here"
                onChange={e => this.setState({ message: e.target.value })}
                required
              />
            </label>
            <div className="button--container">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
export default Contact;
