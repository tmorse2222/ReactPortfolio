import React from 'react';

export default function Portfolio() {
    return (
        <section>
            <h2 id="portfolio">Portfolio</h2>
            <div>
                <h3>Sequelize E-Commerce Back-End</h3>
                <img src={require('./images/project1.jpg')} alt="Sequelize E-Commerce Back-End" style={{ height: 300, width: 475}}></img>
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