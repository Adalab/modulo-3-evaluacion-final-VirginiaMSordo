
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import person from '../images/person.png';
import alien from '../images/alien.png';
import NotFound from './NotFound';


function Detail(props) {
    const params = useParams();
    const userFound = props.idFinder(params.id);

    const imageSpecie = () => {
        if (userFound.species === 'Human') {
            return <img className="icon" src={person} alt="species" />;
        } else if (userFound.species === 'Alien') {
            return <img className="icon" src={alien} alt="species" />;
        }
    };

    if (userFound !== undefined) {
        return (

            <article className="card" >

                <div className="card__image-container">
                    <img src={userFound.image}

                    />
                </div>
                <div className="card__content">
                    <p className="card__title text--medium">
                        {userFound.name}
                    </p>
                    <div className="card__info">
                        <p className="card__title text--medium">Specie {imageSpecie()}</p>
                        <p className="card__title text--medium"> Status: {userFound.status}</p>
                        <p className="card__title text--medium">Planet: {userFound.planet}</p>
                        <Link to={'/'}>

                            <button className=" card__price text--medium" >Go Back</button>

                        </Link >
                    </div>
                </div>

            </article>
        );
    } else {
        return <NotFound />;
    }
}



Detail.propTypes = {
    idFinder: PropTypes.func.isRequired,
};






export default Detail;

