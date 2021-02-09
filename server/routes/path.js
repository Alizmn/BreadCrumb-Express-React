const express = require("express");
const router = express.Router();

// helper function for directory
const hierarchy = (directory, parent) => {
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
      parent.shift();
      childs = hierarchy(directory.children[parent[i]], parent);
    }
  }
  return childs;
};

module.exports = ({ directory }) => {
  router.get("/", function (req, res, next) {
    Object.keys(req.query).length > 0
      ? (url = [...Object.keys(req.query)])
      : (url = ["root"]);
    setTimeout(() => res.json(hierarchy(directory, url)), 1000);
  });

  return router;
};
