

import FilterByName from './FilterByName';
import FilerBySpecie from './FilterBySpecie';
import FilterByStatus from './FilterByStatus';
import PropTypes from 'prop-types';




function Filters(props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    const handleResetBtn = (ev) => {
        ev.preventDefault();
        props.handleReset();
    };

    return (
        <header className="header">
            <form className="form" action='' onSubmit={handleSubmit} >

                <fieldset className='fieldset'>
                    <FilterByName
                        handleSearch={props.handleSearch}
                        search={props.search}
                        dataUser={props.dataUser}
                    />
                </fieldset>
                <div className='gap'>
                    <fieldset className='fieldset'>
                        <FilerBySpecie
                            handleFilterBySpecie={props.handleFilterBySpecie} />
                    </fieldset>
                    <fieldset className='fieldset'>
                        <FilterByStatus
                            handleFilterByStatus={props.handleFilterByStatus}
                            filterByStatus={props.filterByStatus}
                        />

                    </fieldset>
                    <button className="reset" onClick={handleResetBtn}>
                        Reset
                    </button>
                </div>

            </form>
        </header >
    );
}
FilterByName.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
export default Filters;