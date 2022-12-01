import React from 'react';

export default function Portfolio() {
    return (
        <section className='row' style={{ paddingTop: 5 }}>
            <h2 id="portfolio" className='col-md-8 offset-md-2'>Portfolio</h2>
            <div className='col-md-8 offset-md-2 card'>
                <h3>Sequelize E-Commerce Back-End</h3>
                <img src={require('./images/project1.jpg')} alt="Sequelize E-Commerce Back-End" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/E-CommerceBackEnd"> GitHub</a>
                </p>
                <p>
                    Demo Video: <a href="https://drive.google.com/file/d/1Vs-x6u_6WnTYwaXEJPYBbUrJqZyprmYq/view">Google</a>
                </p>
            </div>
            <div className='col-md-8 offset-md-2 card'>
                <h3>FitTracker</h3>
                <img src={require('./images/project12.png')} alt="FitTracker landing page" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/jesus-orduno/workout-tracker"> GitHub</a>
                </p>
                <p>
                    Deployed Application: <a href="https://peaceful-plateau-02295.herokuapp.com/login">Heroku</a>
                </p>
            </div>
            <div className='col-md-8 offset-md-2 card'>
                <h3>Node.js Team Info Generator</h3>
                <img src={require('./images/project10.png')} alt="Team Info Generator" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/Team-Info-Generator"> GitHub</a>
                </p>
                <p>
                    Demo Video: <a href="https://drive.google.com/file/d/1BJ3A17VPO9xyPI7A9FYKqPIwEwAxX9tO/view">Google</a>
                </p>
            </div>
            <div className='col-md-8 offset-md-2 card'>
                <h3>MySQL Employer DB</h3>
                <img src={require('./images/project9.png')} alt="Employer DB" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/EmployerDatabase"> GitHub</a>
                </p>
                <p>
                    Demo Video: <a href="https://drive.google.com/file/d/1GHK6LEzRQAzWimgkiPjjyb3kRm5CqWKp/view">Google</a>
                </p>
            </div>
            <div className='col-md-8 offset-md-2 card'>
                <h3>Express.js Note Taker</h3>
                <img src={require('./images/project7.png')} alt="Note Taker" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/NoteTaker"> GitHub</a>
                </p>
                <p>
                    Deployed Application: <a href="https://lit-everglades-41850.herokuapp.com/">Heroku</a>
                </p>
            </div>
            <div className='col-md-8 offset-md-2 card'>
                <h3>Node.js README Generator</h3>
                <img src={require('./images/project8.png')} alt="README Generator" style={{ height: 300, width: 475}}></img>
                <p>
                    Repository: <a href="https://github.com/tmorse2222/README-Generator"> GitHub</a>
                </p>
                <p>
                    Demo Video: <a href="https://drive.google.com/file/d/1zhyGm1PQoVEITU01noNbAy4ZuFc1lqVW/view">Google</a>
                </p>
            </div>
        </section>
    );
}