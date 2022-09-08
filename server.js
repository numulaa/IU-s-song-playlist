const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("album" in params) {
      if (params["album"] == "lilac") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          detail: [
            {
              title: "lilac",
              videoLink: "https://www.youtube.com/watch?v=v7bnOxV4jAc",
            },
            {
              title: "flu",
              videoLink: "https://www.youtube.com/watch?v=E787kCVAeL8",
            },
            {
              title: "coin",
              videoLink: "https://www.youtube.com/watch?v=86BST8NIpNM",
            },
            {
              title: "hi spring bye",
              VIDEOlINK: "https://www.youtube.com/watch?v=PLDH-rcYd8c",
            },
            {
              title: "celebrity",
              videoLink: "https://www.youtube.com/watch?v=0-q1KafFCLU",
            },
            {
              title: "troll",
              videoLink: "https://www.youtube.com/watch?v=hiUPJaHjuUk",
            },
            {
              title: "empty cup",
              videoLink: "https://www.youtube.com/watch?v=2sQznc9CQxg",
            },
            {
              title: "my sea",
              videoLink: "https://www.youtube.com/watch?v=TqIAndOnd74",
            },
            {
              title: "ah puh",
              videoLink: "https://www.youtube.com/watch?v=7n9D8ZeOQv0",
            },
            {
              title: "epilogue",
              videoLink: "https://www.youtube.com/watch?v=c9E2IT1jHQY",
            },
          ],
        };
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] != "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
