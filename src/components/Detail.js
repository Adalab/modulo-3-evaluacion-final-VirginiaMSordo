import { Link } from 'react-router-dom';
import '../styles/layout/Cards.scss';

function Detail(props) {
    return (

        <article className="card" >

            <div className="card__image-container">
                <img src={props.user.image}
                    alt={`picture`}
                />
            </div>
            <div className="card__content">
                <p className="card__title text--medium">
                    {props.user.name}
                </p>
                <div className="card__info">
                    <p className="card__title text--medium">{props.user.species}</p>
                    <button className="card__price text--medium">Volver</button>
                </div>
            </div>

        </article>
    );
}







export default Detail;

