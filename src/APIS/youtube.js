import axios from 'axios';

const KEY = "AIzaSyDzH2-Fz1_I_ZjCpq_YBCjh4YeTEHvwakM";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
