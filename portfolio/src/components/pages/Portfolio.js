import React from 'react';
import a from '../images/a.png';

export default function Portfolio() {
    return (
        <section>
            <h2 id="portfolio">Portfolio</h2>
            <div>
                <h3>Sequelize E-Commerce Back-End</h3>
                <image src={a} alt="Project 11"></image>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/E-CommerceBackEnd"> GitHub</a>
                </p>
                <p>
                    Demo Video: <a href="https://drive.google.com/file/d/1Vs-x6u_6WnTYwaXEJPYBbUrJqZyprmYq/view">Google</a>
                </p>
            </div>
        </section>
    );
}