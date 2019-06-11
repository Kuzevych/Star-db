import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from '../swapi-service-context';
import Header from '../header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import {
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false,

    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header/>
                            <RandomPlanet/>
                            <Route path='/' exact render={()=><h1>Welcome to Star DB</h1>}/>
                            <Route path='/people' component={PeoplePage}/>
                            <Route path='/planets' component={PlanetsPage}/>
                            <Route path='/starships' component={StarshipsPage}/>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;