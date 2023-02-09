import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Home() {
    return (
        <div>
            <section className="section-hero">
            <div className="home-wrapper">
                <Link to="/exploration" className="nav-link"><h2>exploration</h2></Link>
                <Link to="/points-of-view" className="nav-link"><h4>points of view</h4></Link>
                <AnchorLink href="#home-info" className="nav-link"><h1>Interferance</h1></AnchorLink>
                <div>
                educational experimental explorational fascinating experience installation
                </div>
                <Link to="/multispace" className="nav-link"><h3>multispace</h3></Link>
                <Link to="/waves" className="nav-link"><h2>waves</h2></Link>
            </div>
            </section>
            <section>

                <div>
Topics and concepts

Exhibit Overview:
</div>
                <div>
Exhibit Proposal:
Each part is visually appealing and tells the visual story, However, it represents aspects of holography and connects it to the philosophical ideation
</div>
                <div>
Exhibit Statement:
                </div>
            </section>
            <section id="home-info">
                <h3>About</h3>
                <p>This exhibition explores the topics of personality evolution and the idea of mindfulness and connection of variety worlds aspects through the metaphorical and visual ... </p>
                
                <h3>Idea and Concept</h3>
                <p>The exhibition contains four main installations each of which describes different activities and philosophyc ideas and through representation of holographic concepts and interactive experiences</p>
                
                <h3>Purpose</h3>
                <p>Since this exhibit covers physical, visual and philosophical aspects, each segment of the audience can find the most enjoyable way to experience the presented information either separately or as a whole</p>
                
                <h3>Exhibit parts and Transitions</h3>
                <p>dark -> light -> whole -> granular</p>
                <p>guidence -> choice -> connection -> memory</p>
            </section>
        </div>

    )
}

export default Home;