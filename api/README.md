# Teste 4 Estágio - FrontEnd - Servidor

## Tarefas de Preparação:
* Baixar csv do link: http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp

## Tarefas de código:
* Criar servidor com rota que realiza uma busca textual na lista de cadastro de operadoras (obtido na tarefa de preparação) e retorne as linhas que mais se assemelham
* Criar uma interface usando o framework Vue.js que permita a um usuário fazer essa pesquisa pelo browser

## Linguagem de programação utilizada
Node.js

## Pacotes/bibliotecas utilizadas
* @fast-csv/parse - para carregar arquivos csv;
* fs - abertura do arquivo csv';
* express - framework web;
* body-parser - utilizado para o funcionamento do express;
* path - busca do caminho relativo dos arquivos no sistema operacional;
* nodemon - utilizado no desenvolvimento para recarrecar automaticamente o servidor quando são feitas alterações nos arquivos .js';

## Configurações do Projeto
* 'npm install' na raiz do projeto para instalção do 'node_modules';

## Estrutura do projeto
* 'npm run dev' para a inicialização do servidor;
O servidor é criado e suas funções executada em 'server.js'. Temos a pasta 'download' onde esta inserido o arquivo baixado 'Relatorio_cadop.csv' que servirá de base para a busca dos Operadoras feita pelo cliente.
A estrutura exemplificada do projeto é apresentado no Canva a partir do link: https://www.canva.com/design/DAE0xggxPX8/qvnxAPIdtlLIiBQVuVtV4Q/view?utm_content=DAE0xggxPX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Documentação
Para a documentação geral do código nos baseamos na C4 model que utilizamos para fazer a apresentação no Canva (https://www.canva.com/design/DAE0xggxPX8/qvnxAPIdtlLIiBQVuVtV4Q/view?utm_content=DAE0xggxPX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton). A documentação do código, do processo de construção do algoritmo, das funções com seus problemas e soluções foi feita através do JSDoc e adicionado ao início de cada módulo e cada função.