import '../styles/layout/Cards.scss';
import UserItem from './UserItem';


const UserList = ({ dataUser }) => {
    const oneUser = dataUser.map((user) => {
        return <UserItem key={user.id} user={user} />

    });



    return (

        <ul className="cards" >
            {oneUser}
        </ul>


    );
};

export default UserList;