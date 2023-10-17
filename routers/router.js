const express = require("express");
const api = require("./api/api.book");
const router = express.Router();

router.use('/api', api);

module.exports = router;