import React, { Component } from 'react';
import "./ZsbAdmin.css";
import VerifyUser from './VerifyUser';

class ZsbAdmin extends Component {
    render() {
        return (
            <div className="zsbAdmin">
                <h1 className="dashTitle">ZSB ADMIN PANEL</h1>
                <VerifyUser/>
            </div>
        );
    }
}

export default ZsbAdmin;