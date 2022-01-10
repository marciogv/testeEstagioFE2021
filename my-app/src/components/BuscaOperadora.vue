<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2 id="busca-textual">Busca Textual</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Digite seu texto aqui:</label>
                        <input type="text" class="form-control" v-model="texto" name="texto" id="texto"  />
                    </div>
                </div>
                <button type="button" @click='buscaOperadora()' class="btn btn-danger">Buscar</button>
                <button type="button" @click='apagarTabela()' class="btn btn-danger erase">Apagar tabela</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BuscaOperadora',
  data() {
    return {
      texto: ''
    }
  },
  methods: {
      /**
     * Função responsável por captar o texto do formulário (texto inserido pelo usuário) quando clicar no botão buscar e emitir um sinal com o objeto onde está 
     * registrado o valor do texto que será captado no 'dashboard'
     */
      buscaOperadora() {
          const payload = {
          texto: this.texto
          }
          this.$emit('buscaOperadora', payload)
      },
      /**
     * Função responsável por emitir um sinal, que será captado no 'dashboard', para apagar a tabela quando usuário clica no botão 'apagar'.
     */
      apagarTabela() {
        this.$emit('apagarTabela')
      }
  }
}
</script>