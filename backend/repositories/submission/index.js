const connection = require('../../db/db.js');

function getAllSubmissions() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM submission";
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Erro na seleção:', err.message);
        reject(err);
      } else {
        console.log('Consulta bem-sucedida');
        resolve(results);
      }
    });
  });
}

function createSubmission(name) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO submission (name) VALUES (?) `;
    connection.query(query, [name], (err, results) => {
      if (err) {
        console.error('Erro na inserção:', err.message);
        reject(err);
      }
      resolve(results.insertId);
    });
  });
}


function getSubmission(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM submission WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erro na consulta:', err.message);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getAllSubmissions,
  createSubmission,
  getSubmission
}

// Encerrar a conexão quando não for mais necessária
