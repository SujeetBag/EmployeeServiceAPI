# EmployeeServiceAPI
This is a file written in java script. Node Server to support POC on small application.

Service contain a javascript file, EmployeeServer.js

Install express.js, cors.js and body-parser.js in same folder
npm install express --save
npm install cors --save
npm install body-parser --save

Run it on command prompt >node EmployeeServer.js

Service is listening on Port 3001.

It support following API :

http://localhost:3001/

http://localhost:3001/getemployee

http://localhost:3001/addemployee

http://localhost:3001/filteremployee/<employee name>
  
http://localhost:3001/filteremployee?name=<employee name>  
  
