import axios, { AxiosResponse } from "axios";


export const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    timeout: 15000
});

export const responseBody = (response: AxiosResponse)=> response.data;
export const responseStatus = (response: AxiosResponse) => response.status;

export const requests = {
    get: (url: string, params?: string) => instance.get(url).then((response) => response.data),
    post: (url: string, body: {}) => instance.post(url, body).then((response) => response.data),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody, responseStatus),
    delete: (url: string) => instance.delete(url).then(responseBody, responseStatus)
};