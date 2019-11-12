import React, { Component } from "react";
import axios from "axios";
class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };

  formSubmit = async e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    try {
      await axios.post('https://localhost:3000', data);
      this.setState({ sent: true }, this.resetForm());
    } catch (err) {
      console.log(err);
    }
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
        <form className="form" onSubmit={e => this.formSubmit(e) } >
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

            <div div className="email">
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
