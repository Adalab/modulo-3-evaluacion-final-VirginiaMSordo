import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api.js';
import Header from './Header';
import UserList from './UserList';


function App() {

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataUser(cleanData)
    });
  }, []);            //if render every time a usestate change  [useState const]

  return (
    <>
      <Header />
      <main>
        <UserList dataUser={dataUser} />
      </main>
      <footer className="footer">
        <span> &copy;Virginia Menéndez Sordo 2022</span>
      </footer>

    </>
  );
}

export default App;
