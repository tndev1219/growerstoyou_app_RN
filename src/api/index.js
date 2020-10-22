import axios from 'axios'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const BASE_URL = 'http://abhishek-crowdbotics-814.botics.co/api/v1/'
// const BASE_URL = 'http://192.168.1.177:8000/api/v1/'

POST = (url, params) => {
  return axios.post(`${BASE_URL}${url}`, params, config)
}

GET = (url, params) => {
  return axios.get(`${BASE_URL}${url}`, params, config)
}

export default {
  POST,
  GET
}