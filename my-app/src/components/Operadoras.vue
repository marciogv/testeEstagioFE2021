<template>
    <div class="container-fluid tabela">
        <h2>Tabela Operadoras de Plano de Saúde</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Registro ANS</th>
                <th>CNPJ</th>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>Modalidade</th>
                <th>Logradouro</th>
                <th>Número</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>CEP</th>
                <th>DDD</th>
                <th>Telefone</th>
                <th>Fax</th>
                <th>Endereço Eletrônico</th>
                <th>Representante</th>
                <th>Cargo Representante</th>
                <th>Data Registro ANS</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in operadoras" :key="item.id">
                  <td>{{ item[0].replaceAll('"', '') }}</td>
                  <td>{{ item[1].replaceAll('"', '') }}</td>
                  <td>{{ item[2].replaceAll('"', '') }}</td>
                  <td>{{ item[3].replaceAll('"', '') }}</td>
                  <td>{{ item[4].replaceAll('"', '') }}</td>
                  <td>{{ item[5].replaceAll('"', '') }}</td>
                  <td>{{ item[6].replaceAll('"', '') }}</td>
                  <td>{{ item[7].replaceAll('"', '') }}</td>
                  <td>{{ item[8].replaceAll('"', '') }}</td>
                  <td>{{ item[9].replaceAll('"', '') }}</td>
                  <td>{{ item[10].replaceAll('"', '') }}</td>
                  <td>{{ item[11].replaceAll('"', '') }}</td>
                  <td>{{ item[12].replaceAll('"', '') }}</td>
                  <td>{{ item[13].replaceAll('"', '') }}</td>
                  <td>{{ item[14].replaceAll('"', '') }}</td>
                  <td>{{ item[15].replaceAll('"', '') }}</td>
                  <td>{{ item[16].replaceAll('"', '') }}</td>
                  <td>{{ item[17].replaceAll('"', '') }}</td>
                  <td>{{ item[18].replaceAll('"', '') }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Operadoras',
        props: ['operadoras'],
     }
</script>