const express = require("express");
const router = express.Router();

/* GET all listing. */
module.exports = ({ directory }) => {
  router.get("/", function (req, res, next) {
    res.send(directory);
  });

  return router;
};
