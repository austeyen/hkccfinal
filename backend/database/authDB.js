const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "teamos", //change to root on local
    password: "password",
    database: "teamos"
});



async function getEmail(email) {
    const sqlQuery1 = "SELECT * FROM userinfo WHERE email = ?";
    
    return new Promise((resolve, reject) => {
        db.query(sqlQuery1, [email], (err, result) => {
		console.log('Query results:', result);
            if (err) {
                return reject(new Error(`Database error in getEmail: ${err.message}`));
            }
            resolve(result);
        });
    });
}

async function getUsername(username) {
    const sqlQuery1 = "SELECT * FROM userinfo WHERE username = ?";
    
    return new Promise((resolve, reject) => {
        db.query(sqlQuery1, [username], (err, result) => {
		console.log('Query results:', result);
            if (err) {
                return reject(new Error(`Database error in getEmail: ${err.message}`));
            }
            resolve(result);
        });
    });
}


async function putLoginCredentials(name, username, email, password) {
    const sqlQuery2 = "INSERT INTO userinfo (name, username, email, password) VALUES (?,?,?,?)";
    return new Promise((resolve, reject) => {
        db.query(sqlQuery2, [name, username, email, password], (err, result) => {
            if (err) {
                return reject(new Error(`Database error in putLoginCredentials: ${err.message}`));
            }
            resolve(result);
        });
    });
}

async function getLoginCredentials(email, password) {
    const sqlQuery = 'SELECT * FROM userinfo WHERE email = ? AND password = ?';
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, [email, password], (err, result) => {
            if (err) {
                return reject(new Error(`Database error in getLoginCredentials: ${err.message}`));
            }
            resolve(result);
        });
    });
}
module.exports = { getEmail, getUsername, putLoginCredentials, getLoginCredentials };
//export { getEmail, putLoginCredentials, getLoginCredentials };
