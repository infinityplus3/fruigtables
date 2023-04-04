import React from "react";
import NavBar from "./navbar.js";
import NavBarMobile from './navbarmobile'
import Footer from './footer.js'
import FooterMobile from './mobilefooter.js'
import Fader from './fadein.js'
import './aboutstyle.css';
import Blank from '../assets/profile.jpeg'


class About extends React.Component {
  render() {
    return (
      <Fader>
        <NavBar bold={[false, false, true, false]} />
        <div className="abouttopbit" style = {{ backgroundColor: '#547048'}}>
          <div className="center">
            <div className="truecenter">
              <div className="aboutfruit">
                <div style={{ fontSize: '48px'}}>We are a team of dedicated high school students, who want to help reduce food waste.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit">
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle">
                Meet the Team!
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider'></div>
              </div>
              <div className='chartcontainer'>
                <div className="paddedoff">
                  <div className="aboutsecondinformation">
                    Praneel Samal
                  </div>
                  <img src={Blank} className='aboutsecondimage'/>
                  <div className="aboutsecondinformationsmallp">
                    As a driver, you would be responsible for taking food from other people's houses, and dropping it off at food shelter near you.
                  </div>
                </div>
                <div className='chartdivpad'>
                  <div className="chartdivider" />
                </div>
                <div className='otherpaddedoff'>
                  <div className="aboutsecondinformation">
                    Aum Kantawala
                  </div>
                  <img src={Blank} className='aboutsecondimage'/>
                  <div className="aboutsecondinformationsmallp">
                    If you have any extra food at home, you can volunteer to give it away to food shelters; this is a much simpler task.
                  </div>
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
            <div className="truecenter" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="aboutfruit">
                <div style={{ fontSize: '40px', width: '100%'}}>We are a team of dedicated high school students, who want to help reduce food waste.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit">
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle" style={{ fontSize: '40px', textAlign: 'center', paddingBottom: '30px' }}>
                Meet the Team!
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider' style={{ width: '30%' }}></div>
              </div>
              <div className='chartcontainer' style={{ flexDirection: 'column' }}>
                <div className="paddedoff">
                  <div className="aboutsecondinformation">
                    Praneel Samal
                  </div>
                  <img src={Blank} className='aboutsecondimage'/>
                  <div className="aboutsecondinformationsmallp">
                    As a driver, you would be responsible for taking food from other people's houses, and dropping it off at food shelter near you.
                  </div>
                </div>
                <div className='chartdivpad' style={{ width: '20%', paddingBottom: 5, paddingLeft: 0, paddingRight: 0 }}>
                  <div className="chartdivider" style={{ width: '100%', height: 5 }}/>
                </div>
                <div className='otherpaddedoff'>
                  <div className="aboutsecondinformation">
                    Aum Kantawala
                  </div>
                  <img src={Blank} className='aboutsecondimage'/>
                  <div className="aboutsecondinformationsmallp">
                    If you have any extra food at home, you can volunteer to give it away to food shelters; this is a much simpler task.
                  </div>
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
        <FooterMobile active={[true, true, false, true]} />
      </Fader>
    );
  }
}

export {About, AboutMobile};