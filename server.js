const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const root = '/home/neicort/repos/CI-0137-ejercicios-C25063';
app.use(express.static(path.join(root)));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});