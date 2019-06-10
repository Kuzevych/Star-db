import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 2000
    };

    static propTypes = {
        updateInterval: PropTypes.number.isRequired
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet =() =>{
        const id = Math.floor(Math.random()*(25-2)+2);
        //const id = 12000;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error, } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='random-planet jumbotron rounded'>
                { errorMessage }
                { spinner }
                { content }
            </div>
        );
    }
}



export default RandomPlanet;


const PlanetView = ({planet}) => {
    const { id, name, population,
        rotationPeriod, diameter } = planet;
    return(
        <React.Fragment>
            <img className='planet-image'
                 alt={ name }
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            />
            <div>
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
