import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="AMIETE" from="July 2018" to="Present"/>
            <Widecard title="SSLC | HSC" where="Varanasi Secondary School" from="2007" to="2011"/>
            </div>
            )
        }
    }
    
export default Education
    