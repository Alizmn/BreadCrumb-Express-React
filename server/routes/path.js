const express = require("express");
const router = express.Router();

/* GET users listing. */
module.exports = ({ directory }) => {
  router.get("/:id", function (req, res, next) {
    const fullUrl = req.url;
    res.send(fullUrl);
  });

  return router;
};
