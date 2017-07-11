import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/data`)
    .then(response => {
      console.log(response);
    })
    .catch(console.error);