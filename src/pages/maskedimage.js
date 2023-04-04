import React from "react";
import './stylin.css'

class MaskImg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width='100%' height='100%' className="flexed nofade">
          <mask id="svgmask1">
              <rect width="100%" height="100%" fill="rgba(255, 255, 255, 0.4)"></rect>
              <rect width="100%" height={`${100-this.props.heightp}%`} y={`${this.props.heightp}%`} fill="rgba(255, 255, 255, 1)"></rect>
          </mask>
          <image height="100%" width='100%' href={this.props.image} mask="url(#svgmask1)"></image>
      </svg>
    );
  }
}

export default MaskImg;