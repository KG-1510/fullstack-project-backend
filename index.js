const express = require('express');
const mysql = require('mysql');
const TransactionRoutes = require('./routes/TransactionRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: 'config.env' });
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Home');
});

app.use('/transac', TransactionRoutes);

app.listen(3001, () => {
  console.log('✅ Server is started at port: 3001');
});
