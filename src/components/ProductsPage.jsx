import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  filterByStockAndStr,
  filterByStr,
  filterByStock,
} from '../utils/filters';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const onSearch = (strToSearch, isStock) => {
    const prodcutsByStr = jsonData.filter((product) => {
      if (filterByStockAndStr(product, isStock, strToSearch)) {
        return true;
      }
      if (filterByStr(product, isStock, strToSearch)) {
        return true;
      }
      if (filterByStock(product, isStock, strToSearch)) {
        return true;
      }
      return false;
    });

    strToSearch !== '' || isStock
      ? setProducts(prodcutsByStr)
      : setProducts(jsonData);
  };

  return (
    <Row>
      <Col>
        <SearchBar onSearch={onSearch} />
      </Col>
      <Row>
        <ProductTable products={products} />
      </Row>
    </Row>
  );
}

export default ProductsPage;
