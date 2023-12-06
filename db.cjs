const mysql = require('mysql');
const config = require('./config.cjs');

const connection = mysql.createConnection({
  user: config.userMYQL,
  password: config.passwordMYSQL,
  host: config.hostMYSQL,
  database: config.dbMYSQL,
  port: config.portMYSQL,
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
