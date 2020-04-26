import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css//Experties.css'
import { faLaptopCode, faCode, faDatabase} from '@fortawesome/free-solid-svg-icons' 
import MagicHover from "magic-hover"
class Experties extends Component {
    render() {
        return (
            <div className="about">
                <h3 className="experties">What am I good at ? </h3>
                <br/>
                <div className="row">
                   <Icons className="Icons1" myIcon={iconOBG[0].icon} myTitle={iconOBG[0].title} myDescription={iconOBG[0].description} />
                   <Icons className="Icons2" myIcon={iconOBG[1].icon} myTitle={iconOBG[1].title} myDescription={iconOBG[1].description} />
                   <Icons  className="Icons3"myIcon={iconOBG[2].icon} myTitle={iconOBG[2].title} myDescription={iconOBG[2].description} />
                </div>
            </div>
        )
    }
}
export default Experties

const iconOBG = [
    {
        icon: <FontAwesomeIcon className="exp-1" icon={faLaptopCode} size="2x"/>,
        title: <h3 className="backend"><b>BackEnd</b></h3>,
        description: <p className="div-b">I did my Internship and developed a
            converstional chatbot using Python backend</p>
    },
    {
        icon: <FontAwesomeIcon className="exp-1" icon={faCode} size="2x"/>,
        title: <h3 className="frontend"><b>FrontEnd</b></h3>,
        description:<div className="div-f2"> <p className="div-f">Frontend has always been my favorite part.I have developed couple of websites using React and CSS.</p></div>
    },
    {
        icon: <FontAwesomeIcon className="exp-1"icon={faDatabase} size="2x"/>,
        title:<h3 className="database"><b>Database</b></h3>,
        description:<div className="div-d"><p className="para-d"> I have a depth knowledge of PostgreSQL & MySQL for 
        managing databases.</p></div>
    }

];
class Icons extends Component {
    render() {
        const options ={
            max:40,
            reverse:true,
            perspective:1000,
            scale:{x:1.2,y:1.2,z:1.2},
            rotate:0,
            translate:{x:0,y:0}
        };
        return (
            <MagicHover options={options} className={"simple-box"}>
                <div className="div-card">
                    <span className="div-icons">
                        {this.props.myIcon}
                    </span>
                    <h4 className="div-heading">{this.props.myTitle}</h4>
                    <p className="div-para">{this.props.myDescription}
                </p>
                </div>
            </MagicHover>

        );

    }
}
