import ProductRow from './ProductRow.jsx';
import Table from 'react-bootstrap/Table';
function ProductTable(props) {
  const { products } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </tbody>
    </Table>
  );
}

export default ProductTable;
