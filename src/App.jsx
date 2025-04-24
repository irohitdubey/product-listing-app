import { useState, useEffect } from "react";
import AddProductForm from "./components/AddProductForm";
import FilterBar from "./components/FilterBar";
import ProductCard from "./components/ProductCard";
import ProductCharts from "./components/ProductCharts";
import { initialProducts } from "./mockData";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [colorFilter, setColorFilter] = useState("Filter by Color");
  const [capacityFilter, setCapacityFilter] = useState("Filter by Capacity");

  // Load products from localStorage or mock API
  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem("products");
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        // Simulate API fetch
        setTimeout(() => {
          setProducts(initialProducts);
          localStorage.setItem("products", JSON.stringify(initialProducts));
        }, 1000);
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to load products");
      setLoading(false);
    }
  }, []);

  // Update localStorage when products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  // Add new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const color =
      product.data?.color ||
      product.data?.Color ||
      product.data?.Strap_Colour ||
      "N/A";
    const capacity =
      product.data?.capacity ||
      product.data?.Capacity ||
      product.data?.Hard_disk_size ||
      "N/A";
    return (
      (colorFilter === "Filter by Color" || color === colorFilter) &&
      (capacityFilter === "Filter by Capacity" || capacity === capacityFilter)
    );
  });

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl text-center mb-6 font-bold">
        Product Listing with Charts
      </h1>
      <AddProductForm addProduct={addProduct} />
      <FilterBar
        setColorFilter={setColorFilter}
        setCapacityFilter={setCapacityFilter}
      />

      <div className="grid grid-cols-1  gap-4 mb-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductCharts products={products} />
    </div>
  );
};

export default App;
