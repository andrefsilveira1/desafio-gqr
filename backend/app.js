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
const exportCSV = require("./utils/convertCSV");
const bodyParser = require('body-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


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

function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy');
}

app.post("/upload-csv", upload.single("csv"), (req, res) => {
  const name = req.body.name
  const csvData = [];
  let temp;
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

});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
