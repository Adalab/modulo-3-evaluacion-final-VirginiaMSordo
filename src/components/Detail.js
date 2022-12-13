import '../styles/layout/Cards.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function Detail(props) {
    const params = useParams();
    const userFound = props.idFinder(params.id);

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
                    <p className="card__title text--medium">{userFound.species}</p>
                    <p className="card__title text--medium">{userFound.status}</p>
                    <p className="card__title text--medium">{userFound.origin.name}</p>
                    <Link to={'/'}>

                        <button className=" card__price text--medium" >Details</button>

                    </Link >
                </div>
            </div>

        </article>
    );
}
Detail.propTypes = {
    idFinder: PropTypes.func.isRequired,
};






export default Detail;

