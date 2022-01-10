const axios = require('axios');

/**
 * Função responsável por captar o texto do formulário (texto inserido pelo usuário) quando clicar no botão buscar e emitir um sinal com o objeto onde está 
 * registrado o valor do texto que será captado no 'dashboard'
 */
export async function mostrarResultado() {

    const response = await axios.get('/api/operadoras');
    return response.data;
}

/**
 * Função responsável por fazer a rota entre o que foi inserido pelo usuário e que vai chegar ao backend como dado para realização de funções pelo servidor
 */
export async function buscarOperadora(data) {
    const response = await axios.post(`/api/busca`, data);
    return response.data;
}

