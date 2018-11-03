import React from 'react';
import "./jumbotron.css";

const jumbotron = () => (
    <div className = "jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1>Bleach Character Game!</h1>
            <h4>Earn points by clicking on the images.<br/> Game resets upon clicking double.</h4>
        </div>
    </div>
);

export default jumbotron;