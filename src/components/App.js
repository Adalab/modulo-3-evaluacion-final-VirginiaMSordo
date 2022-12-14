import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api.js';
import ls from '../services/localStorage';
import { Route, Routes, } from 'react-router-dom';
import UserList from './UserList';
import Filters from './Filters';
import Detail from './Detail';
import NotFound from './NotFound'



function App() {

  const [dataUser, setDataUser] = useState([]);
  const [search, setSearch] = useState(ls.get('search', ''));
  const [filterBySpecie, setFilterBySpecie] = useState('all');
  const [filterByStatus, setFilterByStatus] = useState([]);

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataUser(cleanData)
    });
  }, []);

  // HANDLES
  const handleSearch = (name) => {
    ls.set('search', name);
    setSearch(name);
  };

  const handleFilterBySpecie = (value) => {
    setFilterBySpecie(value)
  };

  const handleFilterByStatus = (value) => {
    if (filterByStatus.includes(value)) {
      const checkedStatus = filterByStatus.filter(
        (oneStatus) => oneStatus !== value
      );

      setFilterByStatus(checkedStatus);
    } else {
      const checkedStatus = [...filterByStatus, value];

      setFilterByStatus(checkedStatus);
    }
  };

  // FILTERS
  const filterSearch = dataUser

    .filter((user) => user.name.toLowerCase().includes(search))
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name))
    .filter((user) => {
      return filterBySpecie === 'all' ? true : user.species === filterBySpecie
    })
    .filter((user) => {
      return filterByStatus.length === 0 ? true : filterByStatus.includes(user.status);
    })



  // CONST

  const renderFilterSearch = () => {
    if (filterSearch.length === 0) {
      return <NotFound />
    } else {
      return <UserList dataUser={filterSearch} />
    }
  };


  // RESET
  const handleReset = () => {
    setSearch('');
    setFilterBySpecie('all');
    setFilterByStatus([]);
    ls.clear();
  };





  // FUN. ROUTER
  const idFinder = (id) => {
    return dataUser.find((user) => user.id === parseInt(id));
  }


  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Filters
              handleSearch={handleSearch}
              search={search}
              handleFilterBySpecie={handleFilterBySpecie}
              filterBySpecie={filterBySpecie}
              handleFilterByStatus={handleFilterByStatus}
              filterByStatus={filterByStatus}
              handleReset={handleReset}
            />

            <main>
              {/* <UserList
                dataUser={filterSearch}
              /> */}
              {renderFilterSearch()}
            </main>



            <footer className="footer">
              <a className="linkedin" href="https://www.linkedin.com/in/vicky-men%C3%A9ndez/"><span> &copy;Virginia Menéndez Sordo 2022 Linkedin profile</span></a>

            </footer>
          </>
        } />

        <Route path="/user/:id" element={<Detail idFinder={idFinder}></Detail>} />
      </Routes>

    </>
  );
}

export default App;
