import Axios from 'axios';
const config = require('../config.json');
const timeStamp = Date.now();
const Cryptojs = require('crypto-js');
const hasher = Cryptojs.MD5(`${timeStamp} + ${config.privateKey} + ${config.publicKey}`).toString();
const instance = Axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    'apikey': `${config.publicKey}`,
    'ts': '1611867032354',
    'hash': '78c66b6ef64507b22be915c9a4357dac'
  }
});
export default instance;