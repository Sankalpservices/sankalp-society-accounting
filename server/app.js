const express = require('express');
const mongoose = require('mongoose');
const societyRoutes = require('./routes/society');
const billingRoutes = require('./routes/billing');

const app = express();
app.use(express.json());

app.use('/api/society', societyRoutes);
app.use('/api/billing', billingRoutes);

mongoose.connect('mongodb://localhost/sankalp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
