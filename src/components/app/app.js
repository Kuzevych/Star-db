import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from "../random-planet";
// import PeoplePage from "../people-page";
// import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
// import ItemDetails, {Record} from '../item-details/item-details';
// import ItemList from "../item-list";
// import ItemDetails from "../item-details";
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
        hasError: false
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
                <div className="stardb-app">
                    {/*<Header/>*/}
                    {planet}
                    <PersonList>
                        {({name})=><span>{ name }</span>}
                    </PersonList>
                    <PersonDetails itemId={11}/>
                    <StarshipList>
                        {({name})=><span>{ name }</span>}
                    </StarshipList>
                    <StarshipDetails itemId={5}/>
                    <PlanetList>
                        {({name})=><span>{ name }</span>}
                    </PlanetList>
                    <PlanetDetails itemId={14}/>
                    {/*<ItemList*/}
                    {/*    getData={getAllPlanets}*/}
                    {/*    onItemSelected={()=>{}}>*/}

                    {/*    {({name})=><span>{ name }</span>}*/}
                    {/*</ItemList>*/}

                    {/*<div className='row mb-2 button-row'>*/}
                    {/*    <button*/}
                    {/*        className="toggle-planet btn btn-warning btn-lg"*/}
                    {/*        onClick={this.toggleRandomPlanet}>*/}
                    {/*        Toggle Random Planet*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                        {/*<Row left={personDetails}*/}
                        {/*     right={starshipDetails}/>*/}
                    {/*<Row left={peopleList}*/}
                    {/*     right={personDetails}/>*/}
                    {/*<PeoplePage/>*/}
                </div>
            </ErrorBoundry>
        );
    }
}

export default App;