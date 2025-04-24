const ProductCard = ({ product }) => {
  return (
    <div className="border p-4  bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <div className="text-sm text-gray-600">
        {product.data ? (
          <ul>
            {Object.entries(product.data).map(([key, value]) => (
              <li key={key}>
                {key.replace(/_/g, " ")}: {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>Data: N/A</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
