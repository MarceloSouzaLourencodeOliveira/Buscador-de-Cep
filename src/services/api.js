import axios from "axios";

    //37704105/json 

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;