import express from 'express';
import path from 'path';
import productosRoutes from './routes/productos.routes.js';
import registrosRoutes from './routes/registros.routes.js';
import userRoutes from './routes/user.routes.js';
import servicioRoutes from './routes/servicioRoutes.js';

const app = express();

app.use(express.static('src'));
app.use('/productos', productosRoutes);
app.use('/user', userRoutes);
app.use('/registros', registrosRoutes);
app.use('/api', servicioRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
