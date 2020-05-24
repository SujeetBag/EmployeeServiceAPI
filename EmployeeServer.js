var express = require("express");
var language = require("./Business/language");
var bodyParser =  require("body-parser");
var cors = require("cors");
var app = express();

app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


  employees = [
    {
      id: 1,
      name: "Raju Kumar",
      department: "Finance",
    },
    {
      id: 2,
      name: "Alka Agnihitri",
      department: "HR",
    },
    {
      id: 3,
      name: "Raman Lamba",
      department: "Admin",
    },
  ];	


app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.route("/addemployee").post(function (req, res) {
  const emp = req.body;
  emp.id = employees.length + 1;
  employees.push(emp);
  return res.json(emp);
});

app.route("/getemployee").get((req, res) => {  
  return res.json(employees);
});

app.route("/filteremployee").get((req, res) => {    
  const name = req.query.name;
  const emp = employees.filter( (employee)=> { return employee.name.toUpperCase().includes(name.toUpperCase())});
  console.log('Filtered: ', emp);
  return res.json(emp);
});

app.route("/filteremployee/:name").get((req, res) => {  
  console.log('Request', req.params);
  const name = req.params.name;
  const emp = employees.filter( (employee)=> { return employee.name.toUpperCase().includes(name.toUpperCase())});
  console.log('Filtered: ', emp);
  return res.json(emp);
});


var server = app.listen(3001, function() {
  console.log("Hello Server is running on port 3001! ");
});
