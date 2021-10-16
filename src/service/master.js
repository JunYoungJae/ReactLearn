const models = require('../models/sequelize-models');

const findAllMasters = async () => {
  const masters = await models.Master.findAll();

  return masters;
};

module.exports = {
  findAllMasters,
};
