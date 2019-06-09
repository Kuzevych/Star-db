import React, {Component} from 'react';
import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import Row from '../row';
import ErrorBoundry from '../error-boundry';



export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: 11,
        hasError: false
    };



    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const itemDetails = (
                <ItemDetails personId={this.state.selectedPerson} />
            );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        );
    }
}
