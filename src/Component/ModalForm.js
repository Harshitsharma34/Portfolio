import { Button } from 'antd';
import 'antd/dist/antd.css'
import './css/Contact.css'
import ContactForm from './ContactForm'
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle ,faEnvelope} from '@fortawesome/free-solid-svg-icons'


class ModalPage extends Component {
    state = {
        modal14: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer >
                <a className="letsConnect" color="primary" onClick={this.toggle(14)}>{<FontAwesomeIcon icon={faEnvelope} className="abc1"/>} Let's Connect</a>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader><p style={{fontSize:"23px",fontFamily:"'Abril Fatface', cursive"}}>Let's Talk</p></MDBModalHeader>
                    <MDBModalBody>
                        <ContactForm />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <a className="closeButton" color="secondary" onClick={this.toggle(14)}>
                            {<FontAwesomeIcon color="tomato" icon={faTimesCircle} size="2x" />}
                        </a>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;
