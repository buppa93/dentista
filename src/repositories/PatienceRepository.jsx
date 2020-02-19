
let request = require('request-promise');
const BASE_URL = 'http://localhost:5000/api/patience';

class PatienceRepository {
    async fetchAll() {
        let endPoint = "/fetch-all";
        return await request({
            'method': 'GET',
            'uri': BASE_URL + endPoint,
            'json': 'true',
            'headers': {
                "User-Agent": "My little demo app"
            }
        }).then(response => {
            return response;
        }).catch(error => {
            return error;
        })
    }

    //TODO Replece with patience data
    async save(patience) {
        let endPoint = '/save';
        return await request({
            'method': 'POST',
            'uri': BASE_URL + endPoint,
            'json': true,
            'headers': {
                "Content-type": "application/json; charset=UTF-8"
            },
            'body': patience
        }).then(response => {
            return response;
        }).catch(error => {
            return error;
        })
    }
}
export default (PatienceRepository)
