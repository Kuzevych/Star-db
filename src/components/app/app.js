import React, {Component} from 'react';
import './app.css';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 1,
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
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
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
                    <ErrorButton />
                </div>
                <PeoplePage />
            </div>
        );
    }
}

export default App;