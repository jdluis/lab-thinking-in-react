const filterByStockAndStr = (product, isStock, strToSearch) => {
  return (
    product.name.toLowerCase().includes(strToSearch.toLowerCase()) &&
    product.inStock === true &&
    isStock === true
  );
};

const filterByStock = (product, isStock, strToSearch) => {
  return isStock === true && product.inStock === true && strToSearch !== '';
};

const filterByStr = (product, isStock, strToSearch) => {
  return (
    isStock === false &&
    product.name.toLowerCase().includes(strToSearch.toLowerCase())
  );
};

export { filterByStockAndStr, filterByStock, filterByStr };
