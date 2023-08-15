const connection = require('../db/db.js');

// Exemplo de consulta
connection.query('SELECT * FROM data', (err, results) => {
  if (err) {
    console.error('Erro na consulta:', err.message);
    return;
  }
  console.log('Resultados da consulta:', results);
});

// Encerrar a conexão quando não for mais necessária
connection.end();
