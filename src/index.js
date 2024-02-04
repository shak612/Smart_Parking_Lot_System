const express = require('express');
const { connectToMysql } = require('./configs/mysqldb');
const parkingSpotRoutes = require('./routes/parkingSpots');
const vehicleRoutes = require('./routes/vehicles');
const transactionsRoutes = require('./routes/transactions');
const ticketsRoutes = require('./routes/tickets');
const app = express();

app.use(express.json());

app.use('/api/parkingSpots', parkingSpotRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/tickets', ticketsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.listen(3000, async () => {
  console.log("server is running on PORT - 3000")
  await connectToMysql()
})