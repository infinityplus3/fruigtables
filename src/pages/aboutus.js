import React from "react";
import NavBar from "./navbar.js";
import NavBarMobile from './navbarmobile'
import Footer from './footer.js'
import Fader from './fadein.js'
import './aboutstyle.css';
import Blank from '../assets/package.jpeg'


class About extends React.Component {
  render() {
    return (
      <Fader>
        <NavBar bold={[false, false, true, false]} />
        <div className="abouttopbit" style = {{ backgroundColor: '#547048'}}>
          <div className="center">
            <div className="truecenter">
              <div className="aboutfruit">
                <div>We would appreciate it if you would take the time to help us by volunteering for our program!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit">
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle">
                Volunteer
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider'></div>
              </div>
              <div className='chartcontainer'>
                <div className="paddedoff">
                  <div className="aboutsecondinformation">
                    Volunteer as a driver!
                  </div>
                  <div className="aboutsecondinformationsmallp">
                    As a driver, you would be responsible for taking food from other people's houses, and dropping it off at food shelter near you.
                  </div>
                  <Link className="givingroundedbutton" href="/giving_back">Volunteer as a driver!</Link>
                </div>
                <div className='chartdivpad'>
                  <div className="chartdivider" />
                </div>
                <div className='otherpaddedoff'>
                  <div className="aboutsecondinformation">
                    Volunteer to donate food!
                  </div>
                  <div className="aboutsecondinformationsmallp">
                    If you have any extra food at home, you can volunteer to give it away to food shelters; this is a much simpler task.
                  </div>
                  <Link className="givingroundedbutton" href="/giving_back">Volunteer as a giver!</Link>
                </div>
              </div>
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

class AboutMobile extends React.Component {
  render() {
    return (
      <Fader>
        <NavBarMobile bold={[false, false, true, false]} />
        <div className="abouttopbit" style = {{ backgroundColor: '#547048'}}>
          <div className="center">
            <div className="truecenter">
              <div className="aboutfruit">
                <div>We would appreciate it if you would take the time to help us by volunteering for our program!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit">
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle">
                Volunteer
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider'></div>
              </div>
              <div className='chartcontainer'>
                <div className="paddedoff">
                  <div className="aboutsecondinformation">
                    Volunteer as a driver!
                  </div>
                  <div className="aboutsecondinformationsmallp">
                    As a driver, you would be responsible for taking food from other people's houses, and dropping it off at food shelter near you.
                  </div>
                  <Link className="givingroundedbutton" href="/giving_back">Volunteer as a driver!</Link>
                </div>
                <div className='chartdivpad'>
                  <div className="chartdivider" />
                </div>
                <div className='otherpaddedoff'>
                  <div className="aboutsecondinformation">
                    Volunteer to donate food!
                  </div>
                  <div className="aboutsecondinformationsmallp">
                    If you have any extra food at home, you can volunteer to give it away to food shelters; this is a much simpler task.
                  </div>
                  <Link className="givingroundedbutton" href="/giving_back">Volunteer as a giver!</Link>
                </div>
              </div>
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

export {About, AboutMobile};


