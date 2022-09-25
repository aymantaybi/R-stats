const express = require("express");
const { spawn } = require("child_process");
const { formatOutput } = require("./utils");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/script", (req, res) => {
  let output = "";
  const rscript = spawn("Rscript", ["test.R"]);
  rscript.stdout.on("data", function (data) {
    console.log("Pipe data from R script ...");
    output += data.toString();
  });
  rscript.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(formatOutput(output));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
