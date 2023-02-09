import React from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal'
import Nav from '../../components/Nav';

function Exploration() {
    return (
        <div>
            <div className="page-wrapper">
            <Nav/>
            <HorizontalScroll reverseScroll = { true }>
            <section className="section-block section-block-intro">

                <div>
                <h4>Physical:</h4> 
                scale and light
                <h4>Philosophic:</h4> 
                discovery, experience
                <h4>Visual:</h4> 
                direction, <b>lines</b>, darkness
                </div>
                <div>
                    <h2>Exhibit:01</h2>
                    <div>
                        <h1>Exploration</h1>
                        <h3>(the discovery)</h3>
                        <p>discovery of the direction through traveling with the light, making choices</p>
                    </div>
                </div>
            </section>  
            <section className="section-block section-block-idea" >
                <div className="section-inner">
                <h2>Idea</h2>
                <h3>Symbolism</h3>
                <p>Light and Laserbeam directions represent vectors of human life and all the moments/obsticles that change a direction of this vector. It explores the topic of the personality growth through experience gain. Here the discovery of the world meets the discovery of ones self</p>
                <h3>Goals</h3>
                <p>To create a feeling of unknown and discovery through the following the selected path. Darkness will not let to see the next step ahead. Experience of interaction witht the exhibit constructed step by step, where the person is making choices that set them on the different path</p>
                </div>
            </section>
            <section className="section-block section-block-setup" >
            <div className="section-inner">
                <h2>Concept</h2>
                <h3>Components and metaphorical meaning</h3>
                <p>laser beam in different locations - path</p>
                <p>projection holograms - will be visible only from a specific position in space</p>
                <p>projection - </p>
                <p>signs - directions</p>
                <p>beam splits - choices</p>
                <h4>Audiience Role</h4>
                <p>Explorer</p>
                </div>
            </section>
            <section className="section-block section-block-graph" >
                <div className="section-inner-flex">
                <div className="setup">
                    <h2>Setup</h2>
                    <h3>Graph</h3>
                    <h3>look and feel</h3>
                    </div>
                    <div className="legend">
                    <h3>Legend</h3>
                    </div>
                    <Link to="/points-of-view" className="nav-link"><li>02.points of view</li></Link>
                </div>
            </section>
            <section className="section-block section-block-graph" >
                <h2>Todo (for internal use):</h2>
                <p>01. Research on projection</p>
                <p>02. Research on creating multiple projection holograms in one plate</p>
                <p>03. research on beamsplitters</p>
                <p>04. Graph/plan of installation</p>
                <p>05. Research on beam move</p>
            </section>
            </HorizontalScroll>
            </div>
        </div>

    )
}

export default Exploration;