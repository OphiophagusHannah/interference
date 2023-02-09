import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal'
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';

function Points() {
    return (
        <div>
          <div className="page-wrapper">
            <Nav/>

            <HorizontalScroll reverseScroll = { true }>
            <section className="section-block section-block-intro">

                <div>
                <h4>Physical:</h4> 
                vision and relativity
                <h4>Philosophic:</h4> 
                perception and opinion
                <h4>Visual:</h4> 
                <b>form</b>, valume, values
                </div>
                <div>
                    <h2>Exhibit:02</h2>
                    <div>
                        <h1>Points of View</h1>
                        <h3>(the perception)</h3>
                        <p>looking at the same thing from the different angles, forming the perception</p>
                    </div>
                </div>
            </section>  
            <section className="section-block section-block-idea" >
                <div className="section-inner">
                <h2>Idea</h2>
                <h3>Symbolism</h3>
                <p>While presenting one piece, different angles of views will show the same object in a different states, which represents the formation of perception based on what we see. As well it represents relativity of how the amount of knowledge or things that we see forms our mindset. Similarly how our vision is dependent on how our brain compile the information we gather through vision.</p>
                <h3>Goals</h3>
                <p>Right after very dark and directed space, the viewer enters more shiny, area with more chaotic placement of grouped holograms. Each holographic and glass group represents the the tpic or question (with some controvercy) that relates to the world, so the person can explore each one by looking and making conclusions, thoughts about what they see</p>
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

                    <Link to="/multispace" className="nav-link"><li>02.points of view</li></Link>
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

export default Points;