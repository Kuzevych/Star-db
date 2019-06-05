import React, {Component} from 'react';
import './app.css';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 1
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };



    render() {
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <div className="stardb-app">
                {/*<Header />*/}
                { planet }
                <div className='row mb-2 button-row'>
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                </div>
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}

export default App;