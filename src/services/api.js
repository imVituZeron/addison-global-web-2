import axios from 'axios';

const api = axios.create({ baseURL: 'http://www.mocky.io/v2/5bc3b9cc30000012007586b7'});
// api ta recebendo um os dados 

export default api;