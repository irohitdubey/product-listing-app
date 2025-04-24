import { useEffect } from "react";
import Chart from "chart.js/auto";

const ProductCharts = ({ products }) => {
  const colorCounts = products.reduce((acc, product) => {
    const color =
      product.data?.color ||
      product.data?.Color ||
      product.data?.Strap_Colour ||
      "N/A";
    acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});

  const capacityCounts = products.reduce((acc, product) => {
    const capacity =
      product.data?.capacity ||
      product.data?.Capacity ||
      product.data?.Hard_disk_size ||
      "N/A";
    acc[capacity] = (acc[capacity] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    // Color Distribution (Bar Chart)
    const colorChart = new Chart(document.getElementById("colorChart"), {
      type: "bar",
      data: {
        labels: Object.keys(colorCounts),
        datasets: [
          {
            label: "Product Distribution by Color",
            data: Object.values(colorCounts),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: { y: { beginAtZero: true } },
        responsive: true,
        maintainAspectRatio: false, // Allow custom height
      },
    });

    // Capacity Distribution (Pie Chart)
    const capacityChart = new Chart(document.getElementById("capacityChart"), {
      type: "pie",
      data: {
        labels: Object.keys(capacityCounts),
        datasets: [
          {
            label: "Product Distribution by Capacity",
            data: Object.values(capacityCounts),
            backgroundColor: [
              "#FF6384", // 64 GB (red)
              "#36A2EB", // 128 GB (blue)
              "#FFCE56", // 256 GB (yellow)
              "#4BC0C0", // 512 GB (teal)
              "#9966FF", // Other capacities (purple as fallback)
              "#C9CBDF", // N/A (gray as fallback)
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allow custom height
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });

    return () => {
      colorChart.destroy();
      capacityChart.destroy();
    };
  }, [products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Product Distribution by Color
        </h2>
        <div className="w-full h-64">
          {/* Constrain chart size */}
          <canvas id="colorChart"></canvas>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Product Distribution by Capacity
        </h2>
        <div className="w-full h-64">
          {/* Constrain chart size */}
          <canvas id="capacityChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default ProductCharts;
