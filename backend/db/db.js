const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '172.17.0.2',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'geo'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados.');
});

module.exports = connection;
