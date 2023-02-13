import React from "react";
import { ReactComponent as Left } from '../assets/left.svg'
import { ReactComponent as Right } from '../assets/right.svg'
import './carostyle.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            index: 0
        }
        this.left = this.left.bind(this)
        this.right = this.right.bind(this)
    }

    left() {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    right() {
        if (this.state.index < this.props.images.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div style={{ paddingRight: "20px", paddingLeft: '20px' }} onClick={this.left}>
                    <Left className='left' />
                </div>
                <div className='image'>
                    <img src={this.props.images[this.state.index]} style={{ height: '500px', width: 'auto', objectFit: 'contain', padding: '10px' }}/>
                </div>
                <div style={{ paddingRight: "20px", paddingLeft: '20px' }} onClick={this.right}>
                    <Right className='right'  />
                </div>
            </div>
        );
    }
}

export default Carousel;