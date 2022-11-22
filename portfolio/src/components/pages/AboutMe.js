import React from 'react';
import pic from '../images/pic.jpg';

export default function AboutMe() {
    return (
        <section>
            <h2 id="aboutMe">About Me</h2>
            <img src={pic} alt="Tyler M." style={{ height: 475, width: 300}}></img>
            <p>
                My name is Tyler Morse. I am a software developer for Serva Energy Inc, designing and developing nuclear technologies and applications using Python. I am currently enrolled in the University of Arizona sponsored full-stack web development bootcamp, on track to graduate December 6th. I enjoy playing games and spending time with my family in my free time.
            </p>
        </section>
    );
}