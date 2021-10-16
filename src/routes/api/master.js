const router = require('express').Router();
const masterService = require('../../service/master');

router.get('/', async (req, res) => {
  const masters = await masterService.findAllMasters();
  res.json({
    msg: 'hello this is master',
    masters,
  });
});

module.exports = router;
