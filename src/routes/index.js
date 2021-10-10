const router = require('express').Router();
const apiRouter = require('./api');

router.use('/', apiRouter);

module.exports = router;
