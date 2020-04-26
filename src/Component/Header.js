import React, { Component } from 'react'
import ParentComponent from './Toolbar'
import Navigation from './Navigation'
import './css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import Harshit from './Image/Mask.png'
import { Link } from 'react-router-dom'
import Experties from './Experties'
import About from './About'
import Timeline from './Timeline'
import Contact from './Contact'
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button' 

export default class Header extends Component {
    render() {
        return (
            <>
                 <body>
                    <section id="home">
                        <Navigation />
                        <ParentComponent pageWrapId={"App"} outerContainerId={"page-wrap"} />
                        <div className="header-title">
                            <h4>Harshit Sharma</h4>
                            <p>Full Stack Developer</p>
                        </div>
                        <img className="harshit" src={Harshit} alt="harshit" />
                        <div className="content-div">
                            <p>In <FontAwesomeIcon color="red" icon={faHeart}/> with</p>
                            <h1>Backend.</h1>
                            <h1>Frontend.</h1>
                            <h1>Database.</h1>
                            <p>(Also a so called Engineer)</p>
                            <Link className="explore" to="/project">Explore Projects</Link>
                        </div>
                        <div
                        >
                            <ScrollUpButton 
                            id="scrollbutton"
                            AnimationDuration ={800}
                            EasingType="easeOutCubic"
                            StopAtPostion={0}
                            ShowAtPosition={150}
                            ContainerClassName="ScrollUpButton__Container" 
                            TransitionClassName="ScrollUpButton__Toggled"
                            style={{zIndex:1111,color:"grey"}}/>
                        </div>   
                        
                    </section>
                    
                    <section id="about">
                       <About/>
                    </section>

                    <section id="expeties">
                        <Experties/>
                    </section>

                    <section id="timeline">
                        <Timeline/>
                    </section>

                    <section id="contact">
                        <Contact/>
                    </section>
                    


                </body>
                
                
            </>
        )
    }
}
