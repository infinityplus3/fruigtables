import React from "react";
import Link from "./truelink.js";
import "./stylin.css";
import Scared from "../assets/scared.webp"

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="header">
              <Link href="/home" className="el">
                <div className = 'imgel' style={{ backgroundImage: `url(${Scared})` }}>aa</div>
              </Link>
              <div className="spel">FruigTables</div>
              <Link href="/home" className={this.props.bold[0] ? 'bel' : 'el'}>Home</Link>
              <Link href="/mission" className={this.props.bold[1] ? 'bel' : 'el'}>Our Mission</Link>
              <Link href="/about" className={this.props.bold[2] ? 'bel' : 'el'}>About Us</Link>
              <Link href="/giving_back" className={this.props.bold[3] ? 'bel' : 'el'}>Giving Back</Link>
            </div>
          );
    }
};

export default Header;