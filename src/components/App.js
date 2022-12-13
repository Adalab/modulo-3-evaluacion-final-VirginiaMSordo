import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api.js';
import UserList from './UserList';
import Filters from './Filters';
import NotFound from './NotFound';



function App() {

  const [dataUser, setDataUser] = useState([]);
  const [search, setSearch] = useState('');
  const [filterBySpecie, setFilterBySpecie] = useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataUser(cleanData)
    });
  }, []);            //if render every time a usestate change  [useState const]

  // HANDLES
  const handleSearch = (name) => {
    setSearch(name);
  };

  const handleFilterBySpecie = (value) => {
    setFilterBySpecie(value)
  };


  // FILTERS
  const filterSearch = dataUser

    .filter((user) => user.name.toLowerCase().includes(search))
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name))
    .filter((user) => {
      return filterBySpecie === 'all' ? true : user.species === filterBySpecie
    });




  // CONST
  // const renderFilterSearch = () => {
  //   if (filterSearch.length === 0) {
  //     return <NotFound />
  //   } else {
  //     return <UserList dataUser={filterSearch} />
  //   }
  // };





  return (
    <>

      <Filters handleSearch={handleSearch} search={search} handleFilterBySpecie={handleFilterBySpecie} />

      <main>
        <UserList dataUser={filterSearch}
        />
      </main>
      {/* {renderFilterSearch()} */}
      <footer className="footer">
        <span> &copy;Virginia Menéndez Sordo 2022</span>
      </footer>

    </>
  );
}

export default App;
