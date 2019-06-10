import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
};

const renderName = ({name})=><span>{ name }</span>;
const renderModelAndName=({name, model})=><span><b>{ name }</b> ({model})</span>;
const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);
const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);
const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};