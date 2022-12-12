import '../styles/layout/Cards.scss';


function UserItem(props) {
    return (
        <li className="card" >
            <a className="link" href="#">
                <div className="card__image-container">
                    <img src={props.user.image}
                    />
                </div>
                <div className="card__content">
                    <p className="card__title text--medium">
                        {props.user.name}
                    </p>
                    <div className="card__info">
                        <p className="card__title text--medium">{props.user.species}</p>
                        <button className="card__price text--medium">Details</button>
                    </div>
                </div>
            </a>
        </li>
    );
}


export default UserItem;