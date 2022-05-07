const express = require("express");
const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
const cors = require("cors");

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "*",
  })
);

//BD config
const config = {
  server: "localhost",
  options: { rowCollectionOnDone: true },
  authentication: {
    type: "default",
    options: {
      userName: "sa", // update me
      password: "Database!2021", // update me
    },
  },
};

app.use(express.json()); // built-in middleware for express

app.get("/", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request("SELECT * FROM Northwind.dbo.Customers", function (
        err,
        rowCount,
        rows
      ) {
        if (err) {
          throw err;
        }
      }).on("doneInProc", function (rowCount, more, rows) {
        console.log(rows); // not empty
        res.send(rows);
        connection.close;
      })
    );
  });

  // Initialize the connection.
  connection.connect();
});

app.get("/vefLogin", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request(
        "SELECT * FROM Northwind.dbo.Customers WHERE CustomerID='" +
          req.query.uid +
          "'",
        function (err, rowCount, rows) {
          if (err) {
            throw err;
          }
        }
      ).on("doneInProc", function (rowCount, more, rows) {
        console.log(rows); // not empty
        res.send(rows);
        connection.close;
      })
    );
  });

  // Initialize the connection.
  connection.connect();
});

app.listen(port, () => {
  console.log(`Backend Projeto Lojinha listening at http://localhost:${port}`);
});
