const router = require("express").Router();

const memberRoute = require('./user/memberRoute');
const masterRouter = require('./user/masterRoute');
const reviewRoute = require('./reviewRoute');
const serviceRoute = require('./serviceRoute');
const quotRoute = require('./quotRoute');
const categoryServiceRoute = require('./categoryServiceRoute');

router.use('/api/members', memberRoute);
router.use('/api/masters', masterRouter);
router.use('/api/review', reviewRoute);
router.use('/api/service', serviceRoute);
router.use('/api/quot', quotRoute);
router.use('/api/categoryService', categoryServiceRoute);

module.exports = router;