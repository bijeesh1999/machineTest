const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Sample data for the table
const tableData = [
  { id: 1, name: 'Item 1', quantity: 10, price: 20 },
  { id: 2, name: 'Item 2', quantity: 15, price: 25 },
  { id: 3, name: 'Item 3', quantity: 8, price: 15 },
  { id: 4, name: 'Item 4', quantity: 12, price: 30 },
  { id: 5, name: 'Item 5', quantity: 18, price: 22 },
  { id: 6, name: 'Item 1', quantity: 10, price: 20 },
  { id: 7, name: 'Item 2', quantity: 15, price: 25 },
  { id: 8, name: 'Item 3', quantity: 8, price: 15 },
  { id: 9, name: 'Item 4', quantity: 12, price: 30 },
  { id: 10, name: 'Item 5', quantity: 18, price: 22 },
  { id: 11, name: 'Item 1', quantity: 10, price: 20 },
  { id: 12, name: 'Item 2', quantity: 15, price: 25 },
  { id: 13, name: 'Item 3', quantity: 8, price: 15 },
  { id: 14, name: 'Item 4', quantity: 12, price: 30 },
  { id: 15, name: 'Item 5', quantity: 18, price: 22 },
  { id: 16, name: 'Item 1', quantity: 10, price: 20 },
  { id: 17, name: 'Item 2', quantity: 15, price: 25 },
  { id: 18, name: 'Item 3', quantity: 8, price: 15 },
  { id: 19, name: 'Item 4', quantity: 12, price: 30 },
  { id: 20, name: 'Item 5', quantity: 18, price: 22 },
  { id: 21, name: 'Item 4', quantity: 12, price: 30 },
  { id: 22, name: 'Item 5', quantity: 18, price: 22 },
  { id: 23, name: 'Item 1', quantity: 10, price: 20 },
  { id: 24, name: 'Item 2', quantity: 15, price: 25 },
  { id: 25, name: 'Item 3', quantity: 8, price: 15 },
  { id: 26, name: 'Item 4', quantity: 12, price: 30 },
  { id: 27, name: 'Item 5', quantity: 18, price: 22 },
  { id: 28, name: 'Item 1', quantity: 10, price: 20 },
  { id: 29, name: 'Item 2', quantity: 15, price: 25 },
  { id: 30, name: 'Item 3', quantity: 8, price: 15 },
  { id: 31, name: 'Item 4', quantity: 12, price: 30 },
  { id: 32, name: 'Item 5', quantity: 18, price: 22 }
];

app.get('/api/table', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = tableData.slice(startIndex, endIndex);

  res.json({
    totalItems: tableData.length,
    totalPages: Math.ceil(tableData.length / pageSize),
    currentPage: page,
    pageSize: pageSize,
    data: paginatedData,
  });
});

// Sample data for the pie chart
const pieChartData = [
  { label: 'Category A', value: 30 },
  { label: 'Category B', value: 20 },
  { label: 'Category C', value: 15 },
  { label: 'Category D', value: 25 },
  { label: 'Category E', value: 10 },
];

app.get('/api/pie-chart', (req, res) => {
  res.json(pieChartData);
});

// Sample data for the graph
const graphData = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 15 },
  { x: 'Mar', y: 8 },
  { x: 'Apr', y: 12 },
  { x: 'May', y: 18 },
];

app.get('/api/graph', (req, res) => {
  res.json(graphData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});