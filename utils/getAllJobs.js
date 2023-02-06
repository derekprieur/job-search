import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: { query: 'React Development in USA', num_pages: '1' },
    headers: {
        'X-RapidAPI-Key': '7be5a9bcc5msh2b74fb5480cd279p17f9aajsn79b848f2237d',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
