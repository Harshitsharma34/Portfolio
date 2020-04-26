import React ,{Component} from 'react';
import './css/Navigation.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="main-nav" id="navbar">
        <div className="main-nav-content">
          <ul className="main-nav-items">
            <li className="main-nav-item">
              <Link
                className="main-nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}

              >Home 
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                className="main-nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                className="main-nav-link"
                activeClass="active"
                to="experties"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Experties
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                className="main-nav-link"
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Timeline
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                className="main-nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

