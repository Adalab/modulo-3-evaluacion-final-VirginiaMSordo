import '../styles/layout/Cards.scss';


function UserItem(props) {
    return (
        <li className="card" key={props.user.id} >
            <a className="link" href={props.user.id}>
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
                        <button className="card__price text--medium">Details</button>
                    </div>
                </div>
            </a>
        </li>
    );
}


export default UserItem;