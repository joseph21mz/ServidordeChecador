import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
import db from './db.cjs'; 


// Endpoint para insertar entrada del empleado
app.post('/api/registrarEntrada', (req, res) => {
    const { iTipo, iGEEMCodigo, iGESUCodigo, iPEEMCodigo, iPEVATipo, iMant } = req.body;
    const sql = `CALL PEREmpleadoVerificaHuella_AltMod(?,?,?,?,?,?)`;
  db.query(sql,[iTipo, iGEEMCodigo, iGESUCodigo, iPEEMCodigo, iPEVATipo, iMant], function (error, results){
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }
    res.status(201).json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor backend en ejecución en el puerto 3000');
});



// Endpoint para insertar salida del empleado
app.post('/api/registrarSalida', (req, res) => {
    const { iTipo, iGEEMCodigo, iGESUCodigo, iPEEMCodigo, iPEVATipo, iMant } = req.body;
    const sql = `CALL PEREmpleadoVerificaHuella_AltMod(?,?,?,?,?,?)`;
  db.query(sql,[iTipo, iGEEMCodigo, iGESUCodigo, iPEEMCodigo, iPEVATipo, iMant], function (error, results){
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }
    res.status(201).json(results);
  });
});


