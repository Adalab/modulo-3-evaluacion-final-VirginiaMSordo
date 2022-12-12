
import '../styles/layout/Header.scss';

function Header() {
    return (
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
    );
}

export default Header;