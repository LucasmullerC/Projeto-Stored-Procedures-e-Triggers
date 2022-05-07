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

//Verificar Login Cliente
app.get("/vefLogin", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request(
        "SELECT ContactName FROM Northwind.dbo.Customers WHERE CustomerID='" +
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

//Verificar Login Funcionario
app.get("/vefLoginFunc", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request(
        "SELECT FirstName FROM Northwind.dbo.Employees WHERE EmployeeID='" +
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

//get todos os produtos
app.get("/getprodutos", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request(
        "SELECT ProductName,UnitPrice FROM Northwind.dbo.Products",
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

//get categoria
app.get("/getcategoria", (req, res) => {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    connection.execSql(
      new Request(
        "SELECT ProductName,UnitPrice FROM Northwind.dbo.Products WHERE CategoryID='" +
          req.query.cid +
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
