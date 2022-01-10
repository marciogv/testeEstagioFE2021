const csv = require('@fast-csv/parse');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var path = require('path');
const port = 3070;


const todasOperadoras = [];
let operadoras = []
const dirRaiz = path.resolve(__dirname, 'download');


/**
 * Função responsável por carregar o arquivo 'csv' que contém o cadastro das Operadoras de Plano de Saúde cadastradas na Agência Nacional de Saúde
 * 
 * Abrimos o arquivo 'csv' através do módulo 'fs' conjuntamente com o módulo 'fast-csv/parse' usando encoding='latin-1' para manter as acentuações do arquivo 
 * original, visto que sua abertura através do default 'utf-8' impossibilitava a codificação correta. Também utilizamos a delimitação ';' para o arquivo 'csv'
 * e a quote "'" por conta de haver uso de '"' na tabela. Adicionamos então esta tabela capturada no 'array' 'todasOperadoras'.
 */
 function loadCsvAddNode(dirArquivoCsv) {
  fs.createReadStream(dirArquivoCsv, {encoding: 'latin1'})
  .pipe(csv.parse( {delimiter: ';', skipRows: 2 }))
  .on('data', (tabela) => {
    todasOperadoras.push(tabela);
  })
  .on('end', () => {
  });
};

/**
 * Função responsável por fazer o download do arquivo 'csv' com as informações das Operadoras que será utilizado no programa.
 */
function downloadArquivoCsv (dirRaiz) {
  const dirArquivoCsv = path.resolve(__dirname, 'download', 'Relatorio_cadop.csv');
  const Downloader = require("nodejs-file-downloader");

  (async () => {
    const downloader = new Downloader({
      url: "http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp",
      directory: dirRaiz, 
    });
    try {
      await downloader.download(); 
  
      console.log("All done");
      loadCsvAddNode(dirArquivoCsv);

    } catch (error) {
      console.log("Download failed", error);
    }
  })();
}



/**
 * Função responsável por realizar busca de texto enviado pelo usuário no nomes das Operadoras de Plano de Saúde cadastradas na Agência Nacional de Saúde
 *
 * Iniciamos a função colocando a condição de se houver dados no 'array' 'operadoras', ou seja, se já tiver sido realizada outra busca anteriormente, adicionamos o 
 * valor de um 'array' vazio. Isto impede que a busca atual traga resultado das buscas anteriores, o que não queremos. No próximo passo iteramos 'todasOperadoras' 
 * obtendo na 'const' 'row' o registro de cada operadora - temos aqui outro 'array' com os diversas dados de registro. Transformamos a 'string' que vem como 
 * parâmetro da função em 'UpperCase' pois na lista de cadastro o nome das operadoras esta também em 'UpperCase'. Por fim colocamos a condição de caso o texto 
 * enviado pelo usuário for encontrado entre os nomes das operadoras (que representa o terceiro índice do 'array' 'row) as informações desta operadora serão 
 * adicionados a variável 'operadoras' que é um 'array' e que será usada para exibição do resultado.
 * @param {string} texto - String com o texto que o usuário envia e que vai ser buscado entre os nomes das Operadoras cadastradas
 *
 */
function buscaNoCadastro (texto) {
  if (operadoras.length !== 0){
    operadoras = [];
  }
  for (const row of todasOperadoras){
    texto = texto.toUpperCase();
    if (row[2].indexOf(texto) !== -1) {
      operadoras.push(row);
    }
  }
}

downloadArquivoCsv(dirRaiz);


app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/operadoras', (req, res) => {
  res.json(operadoras);
});


app.post('/api/busca', (req, res) => {
  const user = req.body.texto;
  if (user !== '') {buscaNoCadastro(user);}
  else {operadoras = [];}
  res.json(operadoras);
});


app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
