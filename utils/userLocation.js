// import axios from 'axios';

// export const fetchData1 = async () => {

//     return navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position, "position")
//         const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

//         return axios.get(geoApiUrl)
//             .then(data => {
//                 console.log(data, "data from api 123")
//                 return data
//             })
//     })
//     return 'test'
// }