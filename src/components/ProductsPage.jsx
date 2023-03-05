import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const onSearch = (strToSearch, isStock) => {
    //Logic Search by Str
    let prodcutsByStr = jsonData.filter((each) => {
      if (each.name.toLowerCase().includes(strToSearch.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    //Logic Search by isStock

    let prodcutsIstock = jsonData.filter((each) => {
      if (each.inStock === isStock) {
        return true;
      } else {
        return false;
      }
    });

    //Logic Search by isStock and Str

    let prodcutsByStrAndisStock = jsonData.filter((each) => {
      if (
        each.name.toLowerCase().includes(strToSearch.toLowerCase()) &&
        each.inStock === true
      ) {
        return true;
      } else {
        return false;
      }
    });

    /* console.log('------------------');
    console.log('Productos: ', prodcutsByStr);
    console.log('Busqueda: ', strToSearch);
    console.log('Stock: ', isStock);
    console.log('------------------'); */

    //Control of Search
    // Search with inStock and str
    if (strToSearch !== '' && isStock === true) {
      setProducts(prodcutsByStrAndisStock);
      console.log('Search with inStock and str');
    }

    // Search with inStock
    else if (strToSearch === '' && isStock === true) {
      setProducts(prodcutsIstock);
      console.log('Search with inStock');
    }

    // Search is str
    else if (strToSearch !== '') {
      setProducts(prodcutsByStr);
      console.log('is str');
    }

    // Search is empty
    else {
      setProducts(jsonData);
      console.log('Search is empty');
    }
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
