
let request = require('request-promise');

class PatienceRepository {
    async fetchAll() {
        return await request({
            'method': 'GET',
            'uri': 'https://jsonplaceholder.typicode.com/users',
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
}
export default (PatienceRepository)
