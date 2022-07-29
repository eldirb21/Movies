import axios from 'axios';
import localStore from './local-store';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.URL;

axios.defaults.timeout = 2500;

export const Client = axios.create({
  baseURL: `${Config.URL}movie/`,
  timeout: 1000,
});

Client.interceptors.request.use(
  async config => {
    // console.log(config);
    // var Token = await localStore.get('Token');
    // if (Token !== null || Token !== "")
    // 	config.headers = {
    // 		Authorization: `Bearer ` + Token,
    // 		Content- Type: 'application/json;charset=utf-8',
    //   };
    return config;
  },
  async err => Promise.reject(err),
);

Client.interceptors.response.use(
  async response => {
    // console.log(response);
    // 	var Token = await localStore.get('Token');
    // 	if (Token !== null || Token !== "") {
    // 		response.headers = {
    // 			Authorization: `Bearer ` + Token
    // 			Content- Type: 'application/json;charset=utf-8'
    // 	};
    // }
    return Promise.resolve(response);
  },
  async err => {
    return Promise.reject(err);
  },
);

export default axios;
