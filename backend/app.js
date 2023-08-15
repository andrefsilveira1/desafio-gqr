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
        console.log("CSV:", result.sort((a, b) => b.gqr - a.gqr))
        res.json(csvData);
      });

  });

app.get("/", (req, res) => {
    res.json({msg: "Hello world"});
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
