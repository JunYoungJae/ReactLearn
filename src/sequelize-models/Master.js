const { Model } = require('sequelize');
class Master extends Model {}

module.exports = (sequelize, dataTypes) => {
  Master.init(
    {
      masterNo: {
        type: dataTypes.STRING,
        primaryKey: true,
      },
      masterName: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: dataTypes.STRING(2),
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      status: {
        type: dataTypes.STRING(2),
        allowNull: false,
      },
      mobile: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      lat: {
        type: dataTypes.DOUBLE,
        allowNull: false,
      },
      lng: {
        type: dataTypes.DOUBLE,
        allowNull: false,
      },
      token: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      registerId: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      registerDate: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      updateId: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      updateDate: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      //TODO: 외래키로 지정, 카테고리 아이디
      // category: {
      //   type: dataTypes.STRING,
      //   allowNull: false
      // },
      //TODO: 의미확인 필요
      callFromTime: {
        type: dataTypes.STRING(2),
        allowNull: true,
      },
      callToTime: {
        type: dataTypes.STRING(2),
        allowNull: true,
      },
      career: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      employeesCount: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      businessRegistrationYn: {
        type: dataTypes.BOOLEAN,
        allowNull: true,
      },
      certificateYn: {
        type: dataTypes.BOOLEAN,
        allowNull: true,
      },
      simpleAppeal: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      detailAppeal: {
        type: dataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'tb_master',
      modelName: 'Master',
    }
  );

  return Master;
};
