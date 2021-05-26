// const emitter = new EventEmitter();
const http = require("http");
const https = require("https");

const api = () => {
  let data = [];

  https
    .get("https://encrypted.google.com/", (res) => {

      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on('end',() => {
      console.log(data)
    })
    .on("error", (e) => {
      console.error(e);
    });

  return data;
};
