import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faInstagram,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import {faPhone ,faHeart,faBeer,faEnvelope,faCopyright} from '@fortawesome/free-solid-svg-icons'
import './css/Contact.css'
import ModalForm from './ModalForm'
export default class Contact extends Component {
    render() {
        return (
            <div className="main-div">
                <h1 className="Find-me">Find me on</h1>
                <div className="icon-div-contact">
                    <div className="div-git">

                        <a href="https://www.github.com/harshitsharma34" className="github">
                            <FontAwesomeIcon icon={faGithub} className="contact-icons" size="3x"/>
                        </a>  
                    </div>
                    <div className="div-linkedin">
                        <a href="https://www.linkedin.com/in/harshitsharma34/" className="linkedin"><FontAwesomeIcon size="3x" className="contact-icons" icon={faLinkedin} />
                        </a>
                    </div>
                    <div className="div-insta">
                        <a href="https://www.instagram.com/harshit.sometimes/?hl=en" className="instagram"><FontAwesomeIcon size="3x" className="contact-icons" icon={faInstagram} /></a>
                    </div>
                </div>
                <div className="tag">
                   <h1 className="head-contact"> 
                        <ModalForm/>
                        <h3 style={{color:"rgb(177, 177, 177)" ,fontFamily : "'Reem Kufi', sans-serif"}}>{<FontAwesomeIcon icon={faPhone} className="abc1"/>} : +91-6394960849</h3>
                   </h1>
                </div>
                <hr className="contact-hr" style={{width:"50%",color:"white"}}/>
                <hr/>
        <h5 className="head3">{<FontAwesomeIcon icon={faCopyright}/>} Harshit Sharma. Made with {<FontAwesomeIcon icon={faHeart} className="abc3"/>} and {<FontAwesomeIcon icon={faBeer} className="abc4"/>}</h5>
            </div>

        )
    }

}