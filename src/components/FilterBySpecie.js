import '../styles/layout/Filters.scss';

const FilterBySpecie = (props) => {
    const handleChangeSpecie = (ev) => {
        props.handleFilterBySpecie(ev.target.value);
    };
    ;

    return (
        <>
            <label className="form__label " htmlFor="specie">
                Specie:
            </label>
            <select
                className="form__input-text"
                name="specie"
                id="id"
                onChange={handleChangeSpecie}
                value={props.filterBySpecie}

            >
                <option value="all">All </option>
                <option value="Alien">Alien </option>
                <option value="Human">Human </option>

            </select>
        </>
    );
};
export default FilterBySpecie;