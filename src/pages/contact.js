import React from "react";
import Fader from './fadein.js'
import Input from "./forminput.js"
import NavBar from "./navbar.js";
import Footer from './footer.js';
import './stylin.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <Fader>
        <NavBar bold={[false, true, false, false]} />
        <div className='contactcontainer'>
          <div className='contactform'>
            <div className='contactformtitle'>Contact Us</div>
            <div className='contactformemail'>
                <Input label="Email Address" locked={false} id='contactformemail' type='input' height={50} value={this.state.email} changeFunc={this.handleEmailChange}/> 
            </div>
            <div className='contactformbody'>
                <Input label="Email Body" locked={false} id='contactformbody' type='textarea' height={80} value={this.state.body} changeFunc={this.handleBodyChange}/>
            </div>
            <div className="needpaddingtop">
                <div className='contactformsubmitbutton' onClick={this.sendEmail}>Send Email</div>
            </div>
          </div>
        </div>
        <hr style={{
          margin: 0,
          backgroundColor: '#CAE2BC',
          border: '1px dashed #547048'
        }}></hr>
        <Footer active={[true, true, false, true]} />
      </Fader>
    );
  }
}

export default Contact;