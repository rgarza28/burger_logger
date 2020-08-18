const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  let connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "caballero28",
    database: "burgers_db",
  });
}

const connectionConfig = process.env.JAWSDB_URL
  ? process.env.JAWSDB_URL
  : {
      host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "e5kscp6g82sax2ac",
      password: "d8ifh8x1shaokawf",
      database: "syrrgxf25qnwytrl",
    };

const connection = mysql.createConnection(connectionConfig);

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
