import React from 'react';
import Footer from '../../components/Footer';
import HorizontalScroll from 'react-scroll-horizontal'
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';

function Multispace() {
    return (
        <div>
   
   <div className="page-wrapper">
            <Nav/>

            <HorizontalScroll reverseScroll = { true }>
            <section className="section-block section-block-intro">

                <div>
                <h4>Physical:</h4> 
                materia and wholeness
                <h4>Philosophic:</h4> 
                connections 
                <h4>Visual:</h4> 
                <b>form</b>, valume, values
                </div>
                <div>
                    <h2>Exhibit:03</h2>
                    <div>
                        <h1>MultiSpace </h1>
                        <h3>(the external)</h3>
                        <p>existing in cohesive layers that influence each other in interconnected web of all different things</p>
                    </div>
                </div>
            </section>  
            <section className="section-block section-block-idea" >
                <div className="section-inner">
                <h2>Idea</h2>
                <h3>Symbolism</h3>
                <p>While being in the same space, the viewer will experience different changing surrounding created by selected sets of elements which will be revealed in changing states.</p>
                <h3>Goals</h3>
                <p></p>
                </div>
            </section>
            <section className="section-block section-block-setup" >
            <div className="section-inner">
                <h2>Concept</h2>
                <h3>Components and metaphorical meaning</h3>
                <p>hologatherings (reflection holograms) - topics and clusters of views</p>
                <p>lights and colors </p>
                <p>sizes of holos - creating difference in accessibility to see/review them</p>
                <p>levels - mace people move </p>
                <h4>Audiience Role</h4>
                <p>Observer</p>
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
                    <Link to="/waves" className="nav-link"><li>02.points of view</li></Link>
                </div>
            </section>
            <section className="section-block section-block-graph" >
                <h2>Todo (for internal use):</h2>
                <p>01. Type of holo colours</p>
                <p>02. forms of clusters</p>
                <p>03. light and reflective holograms</p>
            </section>
            </HorizontalScroll>
            </div>
    

        </div>

    )
}

export default Multispace;