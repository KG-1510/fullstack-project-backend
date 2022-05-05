const express = require('express');
const morgan = require('morgan');
const TransactionRoutes = require('./routes/TransactionRoutes');
const AuthRoutes = require('./routes/Auth');
const connectDB = require('./Utilities/Database');
const dotenv = require('dotenv');
const StudentRoutes = require('./routes/StudentDetails');
const cors = require('cors');
const { connect } = require('./routes/TransactionRoutes');
dotenv.config({ path: 'config.env' });
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectDB();
app.get('/', (req, res) => {
  res.send('Home');
});

//app.use('/transac', TransactionRoutes);
app.use('/', AuthRoutes);
app.use('/dashboard', StudentRoutes);
app.use('/transaction', TransactionRoutes);

app.listen(3001, () => {
  console.log('✅ Server is started at port: 3001');
});
