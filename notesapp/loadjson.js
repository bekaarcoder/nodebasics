const fs = require("fs");

let dataBuffer = fs.readFileSync("data.json");
let data = dataBuffer.toString();
let jsonData = JSON.parse(data);

jsonData.name = "Jane";
jsonData.age = 32;

let saveData = JSON.stringify(jsonData);

fs.writeFileSync("data.json", saveData);
console.log(saveData);
