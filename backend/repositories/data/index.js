const connection = require("../../db/db");

function createData(csvData, id) {
    const query = `INSERT INTO data (depth, c1, c2, c3, ic4, nc4, ic5, nc5, TotalGas, submissionId) VALUES ?`;
    const values = csvData.map(obj => [
        obj.depth,
        parseFloat(obj.c1),
        parseFloat(obj.c2),
        parseFloat(obj.c3),
        parseFloat(obj.ic4),
        parseFloat(obj.nc4),
        parseFloat(obj.ic5),
        parseFloat(obj.nc5),
        parseFloat(obj.TotalGas),
        id,
    ]);

    connection.query(query, [values], (err) => {
        if (err) {
            console.error('Erro na inserção em lote:', err.message);
        }
    });
}

function getDatabyId(id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM data WHERE submissionId = ?`;
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
    createData,
    getDatabyId
};
