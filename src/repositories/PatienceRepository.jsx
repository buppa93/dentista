
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

    async fetchOneById(patience) {
        let endPoint = "/fetch-one";
        return await request({
            'method': 'GET',
            'uri': BASE_URL + endPoint + "?_id=" + patience._id,
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

    async update(patience) {
        let endPoint = '/update';
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

    async delete(patience) {
        let endPoint = '/delete';
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
