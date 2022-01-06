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
      buscaOperadora() {
          const payload = {
          texto: this.texto
          }
          this.$emit('buscaOperadora', payload)
      },
      apagarTabela() {
        this.$emit('apagarTabela')
      }
  }
}
</script>