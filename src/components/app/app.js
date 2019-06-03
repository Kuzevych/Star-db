import React, {Component} from 'react';
import './app.css';
import RandomPlanet from "../random-planet";
// import Header from '../header';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';

class App extends Component {
    render() {
        return (
            <div className="stardb-app">
                {/*<Header />*/}
                <RandomPlanet/>
                {/*{ planet }*/}

                {/*<button*/}
                {/*    className="toggle-planet btn btn-warning btn-lg"*/}
                {/*    onClick={this.toggleRandomPlanet}>*/}
                {/*    Toggle Random Planet*/}
                {/*</button>*/}

                <div className="row mb2">
                    <div className="col-md-6">
                        {/*<ItemList onItemSelected={this.onPersonSelected}/>*/}
                    </div>
                    <div className="col-md-6">
                        {/*<PersonDetails personId={this.state.selectedPerson} />*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;