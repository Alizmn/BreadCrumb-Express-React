const express = require("express");
const router = express.Router();

// helper function for directory
const hierarchy = (directory, parent = ["root"]) => {
  console.log(directory);
  const keys = {};
  if (parent.length === 1) {
    if (directory.type === "file") {
      keys[`THIS IS FILE : ${parent}`] = true;
      return keys;
    } else {
      for (key in directory.children) {
        keys[key] = true;
      }
      return keys;
    }
  }
  let childs;
  for (i = 0; i < parent.length - 1; i++) {
    childs = hierarchy(directory, [parent[i]]);
    if (childs[parent[i + 1]]) {
      console.log("HOME", parent[i + 1]);
      parent.shift();
      childs = hierarchy(directory.children[parent[i]], parent);
    }
  }
  return childs;
};

/* GET users listing. */
module.exports = ({ directory }) => {
  router.get("/", function (req, res, next) {
    let keys = ["root"];
    if (req.query) {
      for (key in req.query) {
        keys.push(key);
      }
    }
    res.json(hierarchy(directory, keys));
  });

  return router;
};
