import React from 'react';
import Link from './truelink.js'
import './stylin.css'
import Facebook from '../assets/facebook.png'
import Discord from '../assets/discord.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Input from './forminput.js'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailerror: '',
            body: '',
            bodyerror: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    handleEmailChange(emaily) {
        this.setState({ email: emaily })
    }

    handleBodyChange(bodyi) {
        this.setState({ body: bodyi })
    }

    sendEmail() {
        window.Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        })
    }

    render() {
        return (
            <div className='footer'>
                <div className='summary'>
                    <div className='sumtitle'>FruigTables</div>
                    <div className='contactinfo'>
                        <div className='phoneno'>Phone Number</div>
                        <div className='separator'></div>
                        <div className='email'>contactfruigtables@gmail.com</div>
                    </div>
                    <div className='summarytext'>We are an organization that aims to reduce hunger and help the community by recyling fruits and vegetables that are currently being wasted. </div>
                    <div className='socialicons'>
                        <div className='socicon' style={{ backgroundImage: `url(${Discord})`}}></div>
                        <div className='sociconf' style={{ backgroundImage: `url(${Facebook})`}}></div>
                        <div className='socicon' style={{ backgroundImage: `url(${Twitter})`}}></div>
                        <div className='socicon' style={{ backgroundImage: `url(${Instagram})`}}></div>
                    </div>
                </div>
                <div className='quicklinks'>
                    <div className='quicktitle'>Quick Links</div>
                    {this.props.active[0] ? <Link href="/home" className="quicklink"><p>Home</p></Link> : null}
                    {this.props.active[1] ? <Link href="/mission" className="quicklink"><p>Our Mission</p></Link> : null}
                    {this.props.active[2] ? <Link href="/about" className="quicklink"><p>About Us</p></Link> : null}
                    {this.props.active[3] ? <Link href="/giving_back" className="quicklink"><p>Giving Back</p></Link> : null}
                </div>
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
        );
    }
}