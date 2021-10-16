const router = require('express').Router();

const memberRouter = require('./member.js');
const masterRouter = require('./master.js');

router.use('/member', memberRouter);
router.use('/master', masterRouter);

module.exports = router;
