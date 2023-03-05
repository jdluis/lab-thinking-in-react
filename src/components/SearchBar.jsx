import { useState, useEffect } from 'react';

function SearchBar(props) {
  const [isStock, setIsStock] = useState(false);
  const [strToSearch, setStrToSearch] = useState('');

  useEffect(() => {
    props.onSearch(strToSearch, isStock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strToSearch, isStock]);

  

  const handleChange = (e) => {
    setStrToSearch(e.target.value);
  };

  const handleCheckbox = (e) => {
    setIsStock(e.target.checked);
  };

  return (
    <div>
      <h3>Search</h3>
      <input value={strToSearch} onChange={handleChange} type="text" />
      <div>
        <label htmlFor="isStock">Filter by Stock</label>
        <input
          id="isStock"
          name="isStock"
          onChange={handleCheckbox}
          type="checkbox"
          value={isStock}
        />
      </div>
    </div>
  );
}

export default SearchBar;
