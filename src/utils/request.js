import config from '../config/index';
import axios from 'axios';

// const TOKEN_INVALID = 'token invalid';
// const NETWORK_ERROR = 'neterror';

const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

// service.interceptors.request.use((req) => {
//     const headers = req.headers;
//     if (!headers.Authorization) {
//         headers.Authorization = 'george';
//         return req;
//     }
// })

service.interceptors.response.use((res) => {
    const { success, data } = res.data;
    if (success === true) {
        return data;
    } 
})

function request(options) {
    options.method = options.method || 'get';
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    } 
    if (typeof options.mock !== 'undefined') {
        config.mock = options.mock;
    }
    if (config.env === 'production') {
        service.defaults.baseURL = config.baseApi;
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
    }
    return service(options);
}



export default request;