import '../styles/pages/NotFound.scss';
import image from '../images/morty.jpg';

function NotFound() {
    return <div className='error_message'>
        <p className="item1">Sorry, character not found, keep your eyes open.</p>
        <img className="found" src={image} alt="notFound" />
    </div>;
}

export default NotFound;