import React from 'react';

export default function AboutMe() {
    return (
        <section className='row' style={{ paddingTop: 5}}>
            <div className='col-md-8 offset-md-2 card'>
                <h2 id="aboutMe">About Me</h2>
                <img src={require('./images/pic.jpg')} alt="Portrait" style={{ height: 475, width: 300}}></img>
                <p>
                    My name is Tyler Morse. I am a software developer for Serva Energy Inc, designing and developing nuclear technologies and applications using Python. I am currently enrolled in the University of Arizona sponsored full-stack web development bootcamp, on track to graduate December 6th. I enjoy playing games and spending time with my family in my free time.
                </p>
            </div>
        </section>
    );
}