import React, { Component } from 'react'
import './css/Error.css'
import Typed from 'react-typed'
export default class Error extends Component {
    render() {
        return (
            <div className="error-div">
                <div className="Error-text">
                   <h1> <Typed strings={['Opps!']} typeSpeed={170} /> </h1>
                </div>
            </div>
        )
    }
}
