const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "../chirps.json");

let arr = [
  { author: "Simmon", body: "Let's play corners!" },
  { author: "Wilem", body: "You're a dreadful partner." },
  { author: "Simmon", body: "Oh, please. I can play well enough." },
  { author: "Wilem", body: "I'll play if Kvothe here joins.." },
  { author: "Kvothe", body: "I could play a round. Who will be our fourth?" }
];

fs.writeFile(dataPath, arr, err => {
  if (err) console.log(err);
});

fs.readFile(
  dataPath,
  {
    encoding: "UTF-8"
  },
  (err, data) => {
    arr.forEach(post => {
      console.log(`${post.body} \n -${post.author} \n`);
    });
  }
);
