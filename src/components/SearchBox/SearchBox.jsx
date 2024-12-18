
const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div>
            <label htmlFor="search">Search by Name</label>
            <input
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