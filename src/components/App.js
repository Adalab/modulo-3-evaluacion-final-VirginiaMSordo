import { useEffect, useState } from 'react';
import callToApi from '../services/api.js';
import '../styles/App.scss';

function App() {

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      setDataUser(data)

    });
  }, []);
  // render every time a usestate change  [useState const]

  return (
    <>
      <header className="header">
        <form >
          <label htmlFor="nameSearch">
            <input
              className="form"
              type="text"
              name="name"
              id="nameSearch"
              placeholder="Search"
            />
          </label>
        </form>
      </header>
      <main>
        <ul className="cards">
          <li className="card">
            <div className="card__image-container">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
                <p className="text--medium">30 Min</p>
                <p className="card__price text--medium">Details</p>
              </div>
            </div>
          </li>

        </ul>

      </main>
      <footer className="footer">
        <span> &copy;Virginia Menéndez Sordo 2022</span>
      </footer>

    </>
  );
}

export default App;
