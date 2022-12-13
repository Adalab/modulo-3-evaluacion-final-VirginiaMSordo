import '../styles/layout/Cards.scss';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const UserList = ({ dataUser }) => {
    const oneUser = dataUser.map((user) => {
        return <UserItem user={user} />;
    });



    return (

        <ul className="cards" >
            {oneUser}
        </ul>


    );
};
UserList.propTypes = {
    oneUser: PropTypes.func.isRequired,
};
export default UserList;