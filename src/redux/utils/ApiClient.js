import request from 'superagent';
import { getSessionStorage } from '../utils/sessionStorage';

const ApiClient = {

    get: (path, params) => new Promise((resolve, reject) => {
        request
            .get(path)
            .query(params)
            .accept('application/json')
            .set('Authorization', getSessionStorage('session').access_token)
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        handleError(err, reject);
                    }
                } else {
                    resolve(res.body);
                }
            });
    }),
    post: (path, params) => new Promise((resolve, reject) => {
        request
            .post(path)
            .send(params)
            .accept('application/json')
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        handleError(err, reject);
                    }
                } else {
                    resolve(res.body);
                }
            });
    })

};

function handleError (err, reject) {
    reject({
        message: err.response && err.response.body ? err.response.body.Message : err.message,
        status: err.status
    });
}

export default ApiClient;
