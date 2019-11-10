import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class contact extends Component{
  render(){
    return (
      <section className="contact-section">
        <h3>Contact</h3>
        <form className="form">
          <div className="id">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </div>
          </div>
          <div className="subject">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" />
          </div>
          <div className="content">
            <label id="contect" htmlFor="content">Content</label>
            <textarea name="content" id cols={30} rows={10} defaultValue={""} />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>
    );
  }
}
ReactDOM.render(<contact/>,document.getElementById("root"));
export default contact