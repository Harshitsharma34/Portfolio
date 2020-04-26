import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMedal,faAnchor,faGraduationCap,faMapMarker,faBook} from '@fortawesome/free-solid-svg-icons'
import {faGrav} from '@fortawesome/free-brands-svg-icons'
import './css/Timeline.css'

const Timeline = () => {
    return(
    <div className="div-time">
        <div className="sub-div-time">
            <h1 className="timeline">Timeline</h1>
        </div>
        <VerticalTimeline className="ver-div">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2020"
                contentStyle={{background:'Teal',color: '#fff' }}
                contentArrowStyle={{borderRight:' 7px solid Teal',color: '#fff' }}
                iconStyle={{ background: 'Teal', color: 'White',}}
                icon={<FontAwesomeIcon className="medal" icon={faGraduationCap} />}
            >
                <h3 id="vertical-timeline-element-title-hd">Bachelors Of Technology</h3>
    <h4 id="vertical-timeline-element-subtitle-hd">{<FontAwesomeIcon className="location" color="White" icon={faMapMarker}/>} Jaipur,India</h4>
                <p className="timeline-para">
                    Gradguated from <b> Vivekananda Institute of Technology </b>, Jaipur with 
                    Computer Science as my Major
        </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June-Aug 2019 "
                contentStyle={{background:'Cadetblue',color: '#fff' }}
                contentArrowStyle={{borderRight:' 7px solid Cadetblue',color: '#fff' }}
                iconStyle={{ background: 'Cadetblue', color: '#fff' }}
                icon={<FontAwesomeIcon className="medal" icon={faGrav}/>}
                
            >
                <h3 id="vertical-timeline-element-title-hd">Python Intern</h3>
                <h4 id="vertical-timeline-element-subtitle-hd">{<FontAwesomeIcon className="location" color="White" icon={faMapMarker}/>} Lucknow,India</h4>
                <p className="timeline-para">
                    @Review Technologies Worked On a Natural Language Processing Module 
                    and ended up in  building a conversational Chatbot
        </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2019- Jan 2020"
                contentStyle={{background:'Tomato',color: '#fff' }}
                contentArrowStyle={{borderRight:' 7px solid Tomato',color: '#fff' }}
                iconStyle={{ background: 'Tomato', color: '#fff' }}
                icon={<FontAwesomeIcon className="medal" icon={faMedal}/>}
                
            >
                <h3 id="vertical-timeline-element-title-hd">Python Certification</h3>
                <h4 id="vertical-timeline-element-subtitle-hd">{<FontAwesomeIcon className="location" color="White" icon={faMapMarker}/>} Online Course</h4>
                <p className="timeline-para">
                     Did an Online 6 months certification course with <b>Python Specialization</b>
        </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'Darksalmon', color: '#fff' }}
                contentStyle={{background:'Darksalmon',color: '#fff' }}
                contentArrowStyle={{borderRight:' 7px solid Darksalmon',color: '#fff' }}
                icon={<FontAwesomeIcon className="medal" icon={faBook}/>}
                
            >
                <h3 id="vertical-timeline-element-title-hd">Senior Secondary Education</h3>
                <h4 id="vertical-timeline-element-subtitle-hd">{<FontAwesomeIcon className="location" color="White" icon={faMapMarker}/>} Lucknow,India</h4>
                <p className="timeline-para">
                <b>@Rani Laxmi Bai Memorial school </b> with Computer Science as my major 
        </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(255, 123, 0)', color: '#fff' }}
                icon={<FontAwesomeIcon className="medal" icon={faAnchor}/>}
                
            />
        </VerticalTimeline>
    </div>
    )
}

export default Timeline