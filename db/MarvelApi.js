import Axios from 'axios';
const config = require('../config.json');
const Cryptojs = require('crypto-js');
var timeStamp = Date.now().toString();
var finalString = timeStamp.concat(config.privateKey, config.publicKey);
var hasher = Cryptojs.MD5(finalString).toString();
const instance = Axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    'apikey': `${config.publicKey}`,
    'ts': timeStamp,
    'hash': hasher
  }
});

export default instance;