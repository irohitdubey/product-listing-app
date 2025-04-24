const FilterBar = ({ setColorFilter, setCapacityFilter }) => {
  const colors = [
    "Filter by Color",
    "Cloudy White",
    "Brown",
    "Red",
    "Elderberry",
    "Blue",
  ];
  const capacities = [
    "Filter by Capacity",
    "64 GB",
    "128 GB",
    "256 GB",
    "512 GB",
    "1 TB",
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <select
        onChange={(e) => setColorFilter(e.target.value)}
        className="border max-w-50 rounded-md p-2 flex-1"
        defaultValue="Filter by Color"
      >
        {/* <option disabled>Filter by Color</option> */}
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setCapacityFilter(e.target.value)}
        className="border max-w-50 rounded-md p-2 flex-1"
        defaultValue="Filter by Capacity"
      >
        {/* <option disabled>Filter by Capacity</option> */}
        {capacities.map((capacity) => (
          <option key={capacity} value={capacity}>
            {capacity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
