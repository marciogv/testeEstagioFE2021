<template>
  <div class="hello">
    <Header />
    <div class="container-fluid mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <BuscaOperadora @buscaOperadora="buscaRealizada($event)" @apagarTabela="tabelaApagar($event)"/>
            </div>
          </div>
    </div>
    <div class="row mrgnbtm container-fluid">
        <Operadoras v-if="operadoras.length > 0" :operadoras="operadoras" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import BuscaOperadora from './BuscaOperadora.vue'
import Operadoras from './Operadoras.vue'
import { mostrarResultado, buscarOperadora } from '../services/OperadorasService'


export default {
  name: 'Dashboard',
  components: {
    Header,
    BuscaOperadora,
    Operadoras
  },
  data() {
      return {
          operadoras: [],
          texto: ''
      }
  },
  methods: {
    /**
     * Função responsável por mostrar os resultados da pesquisa dos nomes das operadoras que foi solicitada pelo cliente
     * 
     * Executa a função que solicita ao servidor o 'array' com o resultado da pesquisa, declara a variável 'this.operadoras' com este valor.
     */
    mostrarResultado() {
      mostrarResultado().then(response => {
        this.operadoras = response
      })
    },
    /**
     * Função responsável por captar o evento (texto inserido pelo usuário) e enviá-lo como parâmetro para a função que irá enviar esta requisição para o servidor
     * 
     * Após captar o evento e executar a função que envia o 'post' para o servidor executar a busca, é executada outra função que mostra os resultados da pesquisa.
     */
    buscaRealizada(data) {
      this.texto = data["texto"];
      buscarOperadora(data).then(() => {
        console.log('Busca com sucesso!');
        this.mostrarResultado();
      });
    },
    /**
     * Função responsável por apagar o texto inserido na busca e as operadoras que foram buscadas.
     */
    tabelaApagar() {
      this.operadoras = [];
      this.texto = '';
    }
  },
  mounted () {
    this.mostrarResultado();
  }
}
</script>