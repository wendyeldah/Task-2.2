const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public_html')));

app.get('/addTwoNumbers', (req, res) => {
  // Extracting num1 and num2 from query parameters
  const { num1, num2 } = req.query;

  // Checking if num1 and num2 are provided and are valid numbers
  if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
    // Converting num1 and num2 to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Calculating the sum
    const sum = number1 + number2;

    // Sending response with the sum
    res.json({
      data: sum,
      message: 'success',
      statusCode: 200
    });
  } else {
    // Sending an error response if num1 or num2 is missing or invalid
    res.status(400).json({
      message: 'Invalid input. Please provide valid numbers for num1 and num2.',
      statusCode: 400
    });
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;
