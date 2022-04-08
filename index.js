const express = require('express');
//const mysql = require('mysql');
const TransactionRoutes = require('./routes/TransactionRoutes');
const AuthRoutes = require('./routes/Auth');
const dotenv = require('dotenv');
const StudentRoutes = require('./routes/Student');
const cors = require('cors');
dotenv.config({ path: 'config.env' });
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Home');
});

//app.use('/transac', TransactionRoutes);
app.use('/', AuthRoutes);
app.use('/dashboard', StudentRoutes);

app.listen(3001, () => {
  console.log('✅ Server is started at port: 3001');
});
