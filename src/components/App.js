import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api.js';
import UserList from './UserList';
import Filters from './Filters';



function App() {

  const [dataUser, setDataUser] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataUser(cleanData)
    });
  }, []);            //if render every time a usestate change  [useState const]


  const handleSearch = (name) => {
    setSearch(name);
  };


  // const listOfUsers = () => {
  //   return dataUser.filter(
  //     (eachUser) => eachUser.includes(dataUser)
  //   );
  // };


  return (
    <>

      <Filters handleSearch={handleSearch} search={search} />

      <main>
        <UserList dataUser={dataUser}
        // listOfUsers={listOfUsers()} 
        />
      </main>
      <footer className="footer">
        <span> &copy;Virginia Menéndez Sordo 2022</span>
      </footer>

    </>
  );
}

export default App;
