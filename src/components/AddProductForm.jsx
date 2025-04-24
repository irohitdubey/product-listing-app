import { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    if (!name) {
      alert("Product name is required");
      return;
    }

    let parsedData = null;
    if (data) {
      try {
        parsedData = JSON.parse(data);
        if (typeof parsedData !== "object" || Array.isArray(parsedData)) {
          alert(
            'Product Data must be a valid JSON object (e.g., {"color": "Blue", "capacity": "256 GB"})'
          );
          return;
        }
      } catch (err) {
        alert(
          'Invalid JSON format. Please enter valid JSON (e.g., {"color": "Blue", "capacity": "256 GB"})'
        );
        return;
      }
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      data: parsedData,
    };
    addProduct(newProduct);
    setName("");
    setData("");
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border max-w-70 rounded-md p-2 flex-1"
      />
      <input
        type="text"
        placeholder="Product Data (JSON)"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="border max-w-70 rounded-md p-2 flex-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-300 border-1 text-black rounded p-2 px-4"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
