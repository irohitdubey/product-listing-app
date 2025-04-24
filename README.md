# Product Listing Application

A React.js application for displaying a product catalog with filtering, charting, and data persistence features, built as part of a job assignment.

## Features
- **Product Listing**: Displays products with details (name, color, capacity, etc.) in a responsive grid.
- **Add Products**: Form to add new products with JSON data input, persisted in `localStorage`.
- **Filtering**: Filter products by color and capacity using dropdowns.
- **Charts**:
  - Bar chart for product distribution by color.
  - Pie chart for product distribution by capacity with a custom horizontal legend (colored boxes with labels).
- **Mock API**: Simulates API data fetching with error handling.
- **Responsive Design**: Styled with Tailwind CSS for mobile and desktop compatibility.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Chart.js
- `localStorage` (mock database)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd product-listing-app
