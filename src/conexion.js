const mysql = require("mysql");
// Coloca aquí tus credenciales
/* module.exports = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}); */
const connection = mysql.createConnection({
  host: 'bambu.cbiyyexwbtry.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password:'123456789',
  database:'bambu'
})
connection.connect((err)=>{
  if (err) throw err 
  console.log('conexión establecida') 
})
connection.end()

export default connection;