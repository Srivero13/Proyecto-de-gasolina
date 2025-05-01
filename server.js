const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/estaciones', (req, res) => {
    const filePath = path.join(__dirname, 'estaciones.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return res.status(500).json({ error: "No se pudo leer el archivo de estaciones" });
        }
        
        try {
            const estaciones = JSON.parse(data);
            res.json(estaciones);
        } catch (error) {
            res.status(500).json({ error: "Error al parsear el JSON" });
        }
    });
});
app.post('/estaciones', (req, res) => {
    const filePath = path.join(__dirname, 'estaciones.json');
    if (!Array.isArray(req.body)) {
        return res.status(400).json({ error: "Los datos deben ser un array" });
    }
    fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
        if (err) {
            console.error("Error al guardar:", err);
            return res.status(500).json({ 
                error: "Error al guardar los datos",
                solución: "Verifica los permisos del archivo estaciones.json" 
            });
        }
        
        console.log("Datos guardados correctamente");
        res.json({ 
            success: true,
            message: "Datos actualizados correctamente",
            timestamp: new Date().toISOString() 
        });
    });
});
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`\nServidor funcionando en http://localhost:${PORT}`);
    console.log(`\nAccesos directos:`);
    console.log(`- Interfaz pública: http://localhost:${PORT}`);
    console.log(`- Panel de admin:   http://localhost:${PORT}/admin`);
    console.log(`\n[NOTA] Verifica que el archivo estaciones.json tenga permisos de escritura`);
});