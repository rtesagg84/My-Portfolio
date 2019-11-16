import React, { Component } from "react";
class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
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
        <form className="form">
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
              {!this.state.sent ? (
                <button type="submit" className="button button-primary">
                  {this.state.buttonText}
                </button>
              ) : (
                <button className="button button-disabled">Message Sent</button>
              )}
            </div>
          </div>
        </form>
      </section>
    );
  }
  
}
export default Contact;
