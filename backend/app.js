const express = require('express');
const multer = require("multer");
const fs = require('fs');
const csvParser = require("csv-parser");
const findBestGQR = require('./utils/findbestGQR');
const countValues = require('./utils/countRange');
const { getAllSubmissions, createSubmission, deleteSubmission } = require("./repositories/submission/index");
const { createData, getDatabyId, deleteData } = require("./repositories/data/index");
const connection = require("./db/db");
const cors = require('cors');
const { format } = require('date-fns');
const bodyParser = require('body-parser');
const json2csv = require('json2csv').parse;


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
          const result = findBestGQR(csvData);
          res.json({ id: id, result: result });
        })
    });
});

app.get("/submissoes", (req, res) => {
  getAllSubmissions().then(result => {
    const formatedResult = result.map((sub) => {
      sub.createdAt = format(new Date(sub.createdAt), 'dd/MM/yyyy');;
      return sub;
    });
    res.json(formatedResult)
  });
})

app.get("/gqr/:id", (req, res) => {
  const id = req.params.id;
  getDatabyId(id).then(result => {
    const data = findBestGQR(result);
    res.json(countValues(data))

  })
})

app.get("/submissoes/:id", (req, res) => {
  const id = req.params.id;
  getDatabyId(id).then(result => {
    const { greatest, average, deviation } = findBestGQR(result, true);
    res.json({ result: greatest, average, deviation })
  });
})

app.delete("/submissoes/:id", (req, res) => {
  const id = req.params.id;
  deleteSubmission(id)
    .then(result => {
      console.log("Submissão deletado:", id);
      return deleteData(id);
    })
    .then(result => {
      console.log("Dados excluídos", id);
      res.sendStatus(200);
    })
    .catch(error => {
      console.error("Erro ao deletar:", error);
      res.sendStatus(500);
    });
});

app.use(bodyParser.json());
app.post("/exportar/csv/:name", (req, res) => {
  const { name } = req.params;
  const data = req.body.data;
  const fields = ['depth', 'gqr'];
  const csv = json2csv(data, { fields });

  fs.writeFile("./file-" + name + ".csv", csv, function (err) {
    if (err) throw err;
    console.log('file saved');
  });
  res.redirect(`/exportar/csv/:name`);
});

app.get("/exportar/csv/:name", (req, res) => {
  const filePath = `${__dirname}/file-myfile.csv`;
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Could not download file');
    }
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `inline; filename=${req.params.name}.csv`);
    res.send(file);
  });
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
