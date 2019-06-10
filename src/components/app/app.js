import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from '../swapi-service-context';
import Header from '../header';

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
                    <div className="stardb-app">
                        <Header/>
                        {planet}
                        <div className='row'>
                            <div className='col-md-4 col-12 col-sm-6'>
                                <PersonDetails itemId={11}/>
                            </div>
                            <div className='col-md-4 col-12 col-sm-6'>
                                <StarshipDetails itemId={5}/>
                            </div>
                            <div className='col-md-4 col-12 col-sm-6'>
                                <PlanetDetails itemId={14}/>
                            </div>
                        </div>
                        <PersonList/>

                        <StarshipList/>

                        <PlanetList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;