import React from "react";
import Link from "./truelink.js";
import "./stylin.css";
import Scared from "../assets/scared.webp"
import Menu from "../assets/menu.svg"

class HeaderMobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          dropped: false
        }
        this.drop = this.drop.bind(this)
    }

    drop (){
        this.setState({
            dropped: !this.state.dropped
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Link href="/home" className="el">
                        <div className = 'imgel' style={{ backgroundImage: `url(${Scared})` }}>aa</div>
                    </Link>
                    <div className="spel">FruigTables</div>
                    <div className='dropdownmen' style={{ backgroundImage: `url(${Menu})`}} onClick={this.drop}>aaa</div>
                    <div style={{ width: '10px'}}></div>
                </div>
                {this.state.dropped ? 
                    <div className='dropcontainer'>
                        <hr style={{
                            margin: 0,
                            backgroundColor: '#CAE2BC',
                            border: '1px dashed #547048'
                        }}></hr>
                        <Link href="/home" className={this.props.bold[0] ? 'bel' : 'el'}>Home</Link>
                        <Link href="/mission" className={this.props.bold[1] ? 'bel' : 'el'}>Our Mission</Link>
                        <Link href="/about" className={this.props.bold[2] ? 'bel' : 'el'}>About Us</Link>
                        <Link href="/giving_back" className={this.props.bold[3] ? 'bel' : 'el'}>Giving Back</Link>
                    </div>
                : null}
            </div>
          );
    }
};

export default HeaderMobile;
