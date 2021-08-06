import React, { Component } from 'react';
import '../App.css';

function CountDown() {
  return (
    <div className="card">
        <div className="header">
            <h1>Count Down App</h1>
            <p>count down to my birthday</p>
        </div>
        <div className="timer-container">

            <div className="timer-element">
                <div className="timebx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="time">100</span>
                </div>
                <div className="timetype">
                    <small>Days</small>
                </div>
            </div>
            <div className="mark"><h1>:</h1></div>
            <div className="timer-element">
                <div className="timebx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="time">17</span>
                </div>
                <div className="timetype">
                    <small>hours</small>
                </div>
            </div>

            <div className="mark"><h1>:</h1></div>
            
            <div className="timer-element">
                <div className="timebx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="time">39</span>
                </div>
                <div className="timetype">
                    <small>minutes</small>
                </div>
            </div>

            <div className="mark"><h1>:</h1></div>

            <div className="timer-element">
                <div className="timebx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="time">24</span>
                </div>
                <div className="timetype">
                    <small>Seconds</small>
                </div>
            </div>
        </div>

        <div className="button-container">
            <button className="btn">Save day</button>
        </div>
    </div>
  );
}

export default CountDown;