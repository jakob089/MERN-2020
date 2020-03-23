const connection = require('../contants');

exports.findAll = () => {
    const query = 'SELECT * FROM product';
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if(error) return reject(error);
            return resolve(result);
        });
    })
}