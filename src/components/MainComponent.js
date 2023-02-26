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

        return (
            <div className="main-wrapper">
                <Routes>

                    <Route exact path='/'  element={<Home />} />
                    <Route exact path='/exploration'  element={<Exploration />} />
                    <Route exact path='/points-of-view'  element={<Points />} />
                    <Route exact path='/multispace'  element={<Multispace />} />
                    {/* <Route exact path='/waves' component={WavesPage} element={<Waves />} />                */}
                </Routes>
            </div>
        );
    }
}

export default Main;
