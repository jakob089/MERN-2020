const connection = require('./../contants');

exports.findAll = () => {
    const query = 'SELECT * FROM user';
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if(error) return reject(error);
            return resolve(result);
        });
    })
}