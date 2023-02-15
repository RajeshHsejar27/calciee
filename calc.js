const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var n1 = Number(request.body.num1);
  var n2 = Number(request.body.num2);
  var r1 = n1 + n2;
  var r2 = n1 - n2;
  var r3 = n1 * n2;
  var r4 = n1 / n2;
  response.write(
    "<h1>The result of addition of " + n1 + " and " + n2 + " is " + r1 + "</h1>"
  );
  response.write(
    "<h1>The result of subtraction of " +
      n1 +
      " and " +
      n2 +
      " is " +
      r2 +
      "</h1>"
  );
  response.write(
    "<h1>The result of multiplication of " +
      n1 +
      " and " +
      n2 +
      " is " +
      r3 +
      "</h1>"
  );
  response.write(
    "<h1>The result of division of " + n1 + " and " + n2 + " is " + r4 + "</h1>"
  );
  response.send();
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
