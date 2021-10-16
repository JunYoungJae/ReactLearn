const router = require("express").Router();

const memberRoute = require('./user/memberRoute');
const masterRouter = require('./user/masterRoute');
const reviewRoute = require('./reviewRoute');
const serviceRoute = require('./serviceRoute');
const quotRoute = require('./quotRoute');
const categoryServiceRoute = require('./categoryServiceRoute');

const router = require('express').Router();
const apiRouter = require('./api');

router.use('/', apiRouter);

module.exports = router;
