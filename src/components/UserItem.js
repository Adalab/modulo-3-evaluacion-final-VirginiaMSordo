import '../styles/layout/Cards.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem(props) {
    return (
        <li className="card" key={props.user.id} >
            <div className="link" >
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

                        <Link to={`/user/${props.user.id}`} >

                            <button className=" card__price text--medium" >Detail</button>

                        </Link >

                    </div>
                </div>
            </div>
        </li >
    )
}
UserItem.propypes = {
    user: PropTypes.object,
};



export default UserItem;