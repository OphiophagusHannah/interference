import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Multispace from '../pages/Multispace';
import Interferance from '../pages/Interferance';
import Exploration from '../pages/Exploration';
import Points from '../pages/Points';
import Home from '../pages/Home';
import Waves from '../pages/Waves';

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const InterferancePage = () => {
            return (
                <Interferance />
            );
        }

        const ExplorationPage = () => {
            return (
                <Exploration />
            );
        }

        const PointsPage = () => {
            return (
                <Points />
            );
        }

        const MultispacePage = () => {
            return (
                <Multispace />
            );
        }

        const WavesPage = () => {
            return (
                <Waves />
            );
        }


        return (
            <div className="main-wrapper">
                <Routes>
                 
                    <Route exact path='/' component={HomePage} element={<Home />} />
                    <Route exact path='/exploration' component={ExplorationPage} element={<Exploration />} />
                    <Route exact path='/points-of-view' component={PointsPage} element={<Points />} />
                    <Route exact path='/multispace' component={MultispacePage} element={<Multispace />} />
                    <Route exact path='/waves' component={WavesPage} element={<Waves />} />               
                </Routes>
            </div>
        );
    }
}

export default Main;