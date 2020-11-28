import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://165.22.142.228:1688/',
});
