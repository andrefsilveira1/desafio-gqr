const express = require('express');
const multer = require("multer");
const fs = require('fs');
const csvParser = require("csv-parser");
const findBestGQR = require('./utils/findbestGQR');
const { getAllSubmissions, createSubmission } = require("./repositories/submission/index");
const {createData, getDatabyId} = require("./repositories/data/index");
const connection = require("./db/db");
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3001;
const upload = multer({ dest: "uploads/" });

try {
  connection.connect();
} catch (e) {
  console.log("Something goes wrong:", e)
}

// Não permitir o sistema iniciar sem o banco de dados ativo


app.post("/upload-csv", upload.single("csv"), (req, res) => {
  const name = req.body.name
  const csvData = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => csvData.push(data))
    .on("end", () => {
      fs.unlinkSync(req.file.path);
      createSubmission(name)
      .then(id => {
        createData(csvData, id);
      })
      const result = findBestGQR(csvData);
      res.json(result);
    });
});

app.get("/submissoes", (req, res) => {
  getAllSubmissions().then(result => res.json(result));
})

app.get("/submissoes/:id", (req, res) => {
  const id = req.params.id;
  getDatabyId(id).then(result => res.json(findBestGQR(result)));
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
