const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

// const dataPath = path.join(__dirname, "/downloads");

rp("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach(article => {
    //   console.log(article.data.url);
    if (
      path.extname(article.data.url) === ".png" ||
      path.extname(article.data.url) === ".jpg" ||
      path.extname(article.data.url) === ".gif"
    ) {
      fs.writeFileSync(
        path.join(__dirname, `./downloads/${article.data.id}`),
        article.data.url
      );
    }
  });
});
