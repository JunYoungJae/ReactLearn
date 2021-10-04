'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const db = {};

console.log('###Process env');
console.log(process.env.PG_DATABASE);
console.log(process.env.PG_USER);
console.log(process.env.PG_PW);

let sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PW,
  {
    host: process.env.PG_HOST,
    dialect: process.env.SEQUELIZE_DIALECT,
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: 'utf8_general_ci',
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
