const csv = require('@fast-csv/parse');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3070;


const todasOperadoras = [];
let operadoras = []

function loadCsvAddNode() {
  fs.createReadStream('./Relatorio_cadop.csv', {encoding: 'latin1'})
  .pipe(csv.parse( {delimiter: ';', quote: "'"} ))
  .on('data', (row) => {
    todasOperadoras.push(row)
  })
  .on('end', () => {
  });
};

function buscaNoCsv (texto) {
        if (operadoras.length !== 0){
        operadoras = [];
      }
  for (const row of todasOperadoras){
    texto = texto.toUpperCase();
    if (row[2].indexOf(texto) !== -1) {
      operadoras.push(row);
    }
  }
  return operadoras;
}


loadCsvAddNode();



app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/operadoras', (req, res) => {
  res.json(operadoras);
});


app.post('/api/busca', (req, res) => {
  const user = req.body.texto;
  if (user !== '') {buscaNoCsv(user);}
  else {operadoras = [];}
  res.json(operadoras);
});


app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
