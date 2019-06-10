import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
// import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, {Record} from '../item-details/item-details';
import ItemList from "../item-list";
// import ItemDetails from "../item-details";

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

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getPlanet,
            getPlanetImage,
            getAllPeople,
            getAllPlanets
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
                <Record field='birthYear' label='Birth Year'/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        );

        const planetDetails = (
            <ItemDetails
                itemId={5}
                getData={getPlanet}
                getImageUrl={getPlanetImage}>
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation Period'/>
                <Record field='diameter' label='Diameter'/>
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    {/*<Header/>*/}
                    {planet}
                    <ItemList
                        getData={getAllPeople}
                        onItemSelected={()=>{}}>

                        {({name})=><span>{ name }</span>}
                    </ItemList>
                    <ItemList
                        getData={getAllPlanets}
                        onItemSelected={()=>{}}>

                        {({name})=><span>{ name }</span>}
                    </ItemList>

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