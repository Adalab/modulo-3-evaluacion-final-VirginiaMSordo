import '../styles/layout/Filters.scss';


function FilterByName(props) {
    const handleName = (ev) => {
        props.handleSearch(ev.target.value.toLowerCase())



    };

    return (
        <label htmlFor="nameSearch">
            <input
                className="form"
                type="text"
                name="name"
                id="name"
                placeholder="Search"
                onChange={handleName}
                value={props.search}
            />
        </label>

    );
}

export default FilterByName;
