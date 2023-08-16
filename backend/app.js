const express = require('express');
const csv = require('csv-parser');
const multer = require("multer");
const fs = require('fs');
const csvParser = require("csv-parser");
const findBestGQR = require('./utils/findbestGQR');
const connection = require("./db/db")

const app = express();
const PORT = 3001;
const upload = multer({ dest: "uploads/" });
app.get('/process-csv', (req, res) => {
  const results = [];

  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.post("/upload-csv", upload.single("csv"), (req, res) => {
  const csvData = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => csvData.push(data))
    .on("end", () => {
      fs.unlinkSync(req.file.path);
      const result = findBestGQR(csvData);
      console.log("CSV:", result.sort((a, b) => b.gqr - a.gqr));
      const query = `
    INSERT INTO data (depth, c1, c2, c3, ic4, nc4, ic5, nc5, TotalGas)
    VALUES ?
`;

      const values = csvData.map(obj => [
        obj.depth,
        parseFloat(obj.c1),
        parseFloat(obj.c2),
        parseFloat(obj.c3),
        parseFloat(obj.ic4),
        parseFloat(obj.nc4),
        parseFloat(obj.ic5),
        parseFloat(obj.nc5),
        parseFloat(obj.TotalGas)
      ]);

      connection.query(query, [values], (err, results) => {
        if (err) {
          console.error('Erro na inserção em lote:', err.message);
        } else {
          console.log('Inserção em lote bem-sucedida');
        }
      });
      res.json(csvData);
    });

});

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
