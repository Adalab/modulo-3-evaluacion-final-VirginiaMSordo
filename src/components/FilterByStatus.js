import '../styles/layout/Filters.scss';

function FilterByStatus(props) {
    const handleInput = (ev) => {
        props.handleFilterByStatus(ev.target.value);
    };

    return (
        <>
            <label className="form__label " htmlFor="specie">
                Status:
            </label>
            <input
                type="checkbox"
                name="Alive"
                value="Alive"
                className="check_input"
                onChange={handleInput}
                checked={props.filterByStatus.includes('Alive')}
            />
            <label htmlFor="Alive" className="check_label">
                Alive
            </label>

            <input
                type="checkbox"
                name="Dead"
                value="Dead"
                className="check_input"
                onChange={handleInput}
                checked={props.filterByStatus.includes('Dead')}
            />
            <label htmlFor="Dead" className="check_label">
                Dead
            </label>

        </>
    );
}






export default FilterByStatus;