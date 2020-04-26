import React, { Component } from 'react'
import Flappy from './Image/Flappy.jpg'
import Snakes from './Image/Snakes.jpg'
import Chatbot from './Image/Chatbot.jpg'
import HP from './Image/Homepagess.png'
import LP from './Image/Loginss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import './css/Project.css'
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export default class Project extends Component {
  render() {
    const ChatbotExtra = (
      <a href="https://github.com/Harshitsharma34/H.E.L.E.N">
        <Icon name='github' />
        Github Source
      </a>
    )
    const FlappyExtra = (
      <a href="https://github.com/Harshitsharma34/FlaPy-Bird">
        <Icon name='github' />
        Github Source
      </a>
    )
    const SnakesExtra = (
      <a href="https://github.com/Harshitsharma34/PySnakes">
        <Icon name='github' />
        Github Source
      </a>
    )
    const MusifyExtra = (
      <a href="https://github.com/Harshitsharma34/Musify">
        <Icon name='github' />
        Github Source
      </a>
    )

    return (
      <body className="project-div">

        <div>
          <Link className="home-icon1" style={{
            textDecoration: "none", color: "Black", paddingLeft: "15px", top: "15px", fontSize: "24px", borderRadius: "50%",
            border: "1px solid black", padding: "12px", position: "absolute", left: "13px"
          }} to="/" ><FontAwesomeIcon className="font-home" icon={faHome} /></Link>
          <h1 className="project-head">Project Work</h1>     
              <div className="container">
                <div className="row1">
                  <div className="div-chatbot" >
                  
                    <Card
                      image={Chatbot}
                      header='H.E.L.E.N'
                      meta='Python-NLP'
                      description='H.E.L.E.N, a chatbot build with Machine Learning (NLP) 
                      modules.It can do tasks like weather report,news 
                      & much more features.'
                      extra={ChatbotExtra} />
                  </div>

                  <div className="div-flappy">
                  <Card
                      image={Flappy}
                      header='Flappy Bird'
                      meta='Python-Pygame'
                      description='Flappy Bird is a game build with pygame module.
                      A bird is crafted in the middle and the playe has to
                       avoid obstacle in her path by tapping.'
                      extra={FlappyExtra} />

                  </div>
                </div>
                <div className="row2">
                  <div className="div-snakes">
                  <Card
                      image={Snakes}
                      header='Snakes'
                      meta='Python-Pygame'
                      description='Snakes is my Python implementation of an iconic game. 
                      A food is placed at random places and the snake has to eat
                       it by avoiding obstacle.'
                      extra={SnakesExtra} />

                  </div>
                  <div className="div-music">
                  <Card
                      image={HP}
                      header='Musify'
                      meta='HTML/CSS And Javascript'
                      description='Musify is simple music website like spotify .
                       I tried to design it in my way beautifully with CSS and made 
                       it functional using JS.'
                      extra={MusifyExtra}
                      />
                      
                  </div>
                </div>
              </div>
          
        </div>



        <Contact />
      </body>
    )
  }
}
