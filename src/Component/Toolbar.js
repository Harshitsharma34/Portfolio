import React from "react";
import { stack as Menu } from 'react-burger-menu'
import './css/Toolbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faBars,faChartArea,faIdCard,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-scroll";
import Harshit from './Image/Mask2.png'
export default class ParentComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }
  
    render () {
      return (
        <div>
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          right>
                
                <div>
                  <img style={{width:"80%"}} src={Harshit}/>
                </div>
                <hr/>
                <Link
                style={{color:"white"}}
                className="menubar-content"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => this.closeMenu()}
              >{<FontAwesomeIcon icon={faIdCard} color="white"/>} About 
              </Link>
              <Link
              style={{color:"white"}}
              className="menubar-content"
                activeClass="active"
                to="experties"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => this.closeMenu()}
              > {<FontAwesomeIcon icon={faLaptop} color="white" />} Experties 
              </Link>
              <Link
              style={{color:"white"}}
              className="menubar-content"
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => this.closeMenu()}
              > {<FontAwesomeIcon icon={faChartArea} color="white"/>} Timeline
              </Link>
              
              <Link
              style={{color:"white"}}
              className="menubar-content"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => this.closeMenu()}
              > {<FontAwesomeIcon  icon={faMailBulk} color="white"/>} Contact 
              </Link>
              
              
          </Menu>
          <div className="Bars-icon">
          <FontAwesomeIcon className="class-icon" icon={faBars} onClick={() => this.toggleMenu()} />
          </div>
        </div>

      )
    }
  }