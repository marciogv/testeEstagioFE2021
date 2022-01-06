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
          numberOfUsers: 0,
          texto: ''
      }
  },
  methods: {
    mostrarResultado() {
      mostrarResultado().then(response => {
        this.operadoras = response
        this.numberOfUsers = this.users.length
      })
    },
    buscaRealizada(data) {
      this.texto = data["texto"];
      buscarOperadora(data).then(() => {
        console.log('Busca com sucesso!');
        this.mostrarResultado();
      });
    },
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