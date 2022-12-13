import FilterByName from './FilterByName';
import '../styles/layout/Filters.scss';


function Filters(props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <header className="header">
            <form action='' onSubmit={handleSubmit} >
                <FilterByName
                    handleSearch={props.handleSearch}
                    search={props.search}
                />
            </form>
        </header >
    );
}

export default Filters;