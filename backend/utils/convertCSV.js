const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function exportCSV(data, name) {

    const csvWriter = createCsvWriter({
        path: `${name}.csv}`,
        header: [
            { id: 'depth', title: 'Profundidade' },
            { id: 'gqr', title: 'GQR' },
        ],
    });
    csvWriter.writeRecords(data)
        .then(() => {
            res.download('output.csv', `${name}.csv`, (err) => {
                if (err) {
                    console.error('Erro ao enviar o arquivo:', err);
                }
                fs.unlink('output.csv', (unlinkErr) => {
                    if (unlinkErr) {
                        console.error('Erro ao excluir o arquivo:', unlinkErr);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Erro ao escrever CSV:', error);
            res.status(500).send('Erro ao gerar o arquivo CSV.');
        });
}

module.exports = exportCSV;
