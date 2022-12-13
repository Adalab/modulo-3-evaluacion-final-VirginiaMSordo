

import FilterByName from './FilterByName';
import FilerBySpecie from './FilterBySpecie';
import PropTypes from 'prop-types';




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
                    dataUser={props.dataUser}
                />
                <FilerBySpecie handleFilterBySpecie={props.handleFilterBySpecie} />
            </form>
        </header >
    );
}
FilterByName.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
export default Filters;