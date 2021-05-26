// const emitter = new EventEmitter();
const http = require("http");
const https = require("https");

const APIKEY = "86e0b22";

http
  .get(
    `http://www.omdbapi.com/?id=tt3896198&type=movie&apikey=${APIKEY}`,
    (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(data);
      });
    }
  )
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
