import axios from './axios';

const fetch = () => axios.get('https://jsonplaceholder.typicode.com/users');

export default {
    fetch
}
