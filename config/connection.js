//Sets up MSQL Connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

//Make connection 

connection.connect((err) => {
    if(err){
        console.log("Error connecting:", err.stack);
        return;
    }
    console.log('Connected as id ', connection.threadId);
});

//Export connection for our ORM to use.

if (process.envJAWSDB_URL) {
    connection = mysql.createConnection(process.env.envJAWSDB_URL);
}else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
    });
};

module.exports = connection;    