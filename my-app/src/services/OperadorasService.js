const axios = require('axios');


export async function mostrarResultado() {

    const response = await axios.get('/api/operadoras');
    return response.data;
}

export async function buscarOperadora(data) {
    const response = await axios.post(`/api/busca`, data);
    return response.data;
}

