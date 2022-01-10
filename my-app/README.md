# Teste 4 Estágio - FrontEnd - Página Web (VueJS)

## Tarefas de Preparação:
* Baixar csv do link: http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp

## Tarefas de código:
* Criar servidor com rota que realiza uma busca textual na lista de cadastro de operadoras (obtido na tarefa de preparação) e retorne as linhas que mais se assemelham
* Criar uma interface usando o framework Vue.js que permita a um usuário fazer essa pesquisa pelo browser

## Linguagem de programação utilizada
Vue.js

## Pacotes/bibliotecas utilizadas
* axios - cliente HTTP;
* bootstrap - framework para estruturação CSS;
* babel - compilador de JS;
* vue - biblioteca para utilização do Vue.js;

## Configurações do Projeto
* 'npm install' na raiz do projeto para instalção do 'node_modules';

## Estrutura do projeto
* 'npm run serve' para a inicialização do app da Vue;
Temos uma divisão dos diversos componentes do Vue em módulos separados que são importados pelos módulo realiza as requisições e respostas do servidor ('Dashboard.vue'). 'OperadorasService.js' tem a função de fazer as requisições e captar as respostas do servidor. 
A estrutura exemplificada do projeto é apresentado no Canva a partir do link: https://www.canva.com/design/DAE0xggxPX8/qvnxAPIdtlLIiBQVuVtV4Q/view?utm_content=DAE0xggxPX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Documentação
Para a documentação geral do código nos baseamos na C4 model que utilizamos para fazer a apresentação no Canva (https://www.canva.com/design/DAE0xggxPX8/qvnxAPIdtlLIiBQVuVtV4Q/view?utm_content=DAE0xggxPX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton). A documentação do código, do processo de construção do algoritmo, das funções com seus problemas e soluções foi feita através do JSDoc e adicionado ao início de cada módulo e cada função.
