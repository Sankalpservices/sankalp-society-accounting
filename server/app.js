const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());  // <-- <----- Move here, before routes

app.use('/api/auth', authRoutes);

// rest of your code remains unchanged
mongoose.connect('mongodb://localhost:27017/societydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
});
app.get('/', (req, res) => {
  res.send('Backend working');
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
