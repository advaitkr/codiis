const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandlers');
const app = express();
require('dotenv').config(); 

connectDB();
app.use(express.json());
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const videoRoutes = require('./routes/videoRoutes');
const planRoutes = require('./routes/planRoutes');
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/plans', planRoutes);
app.use(errorHandler);

module.exports = app;

