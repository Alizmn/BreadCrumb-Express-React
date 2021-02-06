const express = require("express");
const router = express.Router();

/* GET users listing. */
module.exports = ({ directory }) => {
  router.get("/", function (req, res, next) {
    res.send(directory);
  });

  return router;
};
