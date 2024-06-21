import "./searchBar.scss";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="type">
        <button>Buy</button>
        <button>Rent</button>
        <form>
          <input type="text" name="location" placeholder="City Location" />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="Min Price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="Max Price"
          />
          <button>
            <img src="/search.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};
