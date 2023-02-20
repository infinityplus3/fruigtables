import React from 'react';
import Link from './truelink.js'
import './stylin.css'
import Facebook from '../assets/facebook.png'
import Discord from '../assets/discord.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Input from './forminput.js'
import axios from 'axios';

export default class FooterMobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            body: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    handleEmailChange(emaily) {
        this.setState({ email: emaily })
        console.log(this.state.email)
    }

    handleBodyChange(bodyi) {
        this.setState({ body: bodyi })
        console.log(this.state.body)
    }

    sendEmail(e) {
        e.preventDefault();
        this.sendMessage();
    }

    sendMessage = () => {
        const GOOGLE_FORM_MESSAGE_ID = 'entry.1914595045'
        const GOOGLE_FORM_EMAIL_ID = 'entry.824495972'
        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2qkZX14-IyJvX4O7h9_z-6uMyxxLeg0PZzMmZAs0Z1ZJFmQ/formResponse'
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
        const formData = new FormData()
        formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.email)
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.body)
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
        .then(() => {
            this.setState({
                email: '',
                body: ''
            })
        }).catch(() => {
            console.log('bozo')
        })
    }

    render() {
        return (
            <div className='footer' style={{ flexDirection: 'column' }}>
                <div className='summary' style={{ alignItems: 'center' }}>
                    <div className='sumtitle'>FruigTables</div>
                    <div className='contactinfo'>
                        <div className='phoneno'>111-111-1111</div>
                        <div className='separator'></div>
                        <div className='email'>contactfruigtables@gmail.com</div>
                    </div>
                    <div className='summarytext' style={{ textAlign: 'center' }}>We are an organization that aims to reduce hunger and help the community by recyling fruits and vegetables that are currently being wasted. </div>
                    <div className='socialicons'>
                        <div className='socicon' style={{ backgroundImage: `url(${Discord})`}}></div>
                        <div className='sociconf' style={{ backgroundImage: `url(${Facebook})`}}></div>
                        <div className='socicon' style={{ backgroundImage: `url(${Twitter})`}}></div>
                        <div className='socicon' style={{ backgroundImage: `url(${Instagram})`}}></div>
                    </div>
                </div>
                <div className='quicklinks' style={{ alignItems: 'center' }}>
                    <div className='quicktitle'>Quick Links</div>
                    {this.props.active[0] ? <Link href="/home" className="quicklink"><p>Home</p></Link> : null}
                    {this.props.active[1] ? <Link href="/mission" className="quicklink"><p>Our Mission</p></Link> : null}
                    {this.props.active[2] ? <Link href="/about" className="quicklink"><p>About Us</p></Link> : null}
                    {this.props.active[3] ? <Link href="/giving_back" className="quicklink"><p>Giving Back</p></Link> : null}
                </div>
                {/* <div className='contactform'>
                    <div className='contactformtitle'>Contact Us</div>
                    <a className='contactformtitle' style={{ fontSize: '16px'}} href="https://forms.gle/XJHLJPeEHFiftXwE9">Click this link to contact us!</a>
                </div> */}
                <div className='contactform' style={{ alignItems: 'center' }}>
                    <div className='contactformtitle' style={{ fontSize: '16px' }}>Contact us by clicking on this link!</div>
                </div>
            </div>
        );
    }
}