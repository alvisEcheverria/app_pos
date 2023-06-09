const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middlewares');
const initModels = require('./models/initModels');
const { rolesRoutes, userRoutes, clientRoutes, authRoutes, categoriesRoutes, productsRoutes, ordersRoutes, invoiceRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(()=> console.log('Autenticación exitosa'))
    .catch(error => console.log(error));

db.sync({force: false})
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log(error));

app.get('/', (req, res) =>{
    console.log('Bienvenido al server');
});

app.use('/api/v1', rolesRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', clientRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', ordersRoutes);
app.use('/api/v1', invoiceRoutes);

app.use(handleError);

module.exports = app;