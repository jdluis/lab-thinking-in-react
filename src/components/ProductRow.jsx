function ProductRow(props) {
  const { product } = props;

  return (
    <tr>
      {product.inStock === true ? (
        <td>{product.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{product.name}</td>
      )}

      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
