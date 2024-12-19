import style from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={style.container}>
            <label className={style.labelText} htmlFor="search">Search by Name</label>
            <input className={style.formInput}
                type="text"
                id="search"
                value={filter}
                onChange={onFilterChange}
                placeholder="Search contacts..."
            />
        </div>
    );
};

export default SearchBox;