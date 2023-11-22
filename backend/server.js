const express = require('express');
const Web3 = require('web3');

const app = express();
const web3 = new Web3('http://localhost:8545'); // Update with your Ganache URL

// Define your API routes and interact with the smart contract using web3

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
