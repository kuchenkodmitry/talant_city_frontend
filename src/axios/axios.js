import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://talentcity.ru/request',
  });


export default instance;