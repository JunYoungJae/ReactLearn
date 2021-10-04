const { Model } = require('sequelize');
class Member extends Model {}

module.exports = (sequelize, dataTypes) => {
  Member.init(
    {
      memberNo: {
        type: dataTypes.STRING,
        primaryKey: true,
      },
      memberName: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: dataTypes.STRING(2),
        allowNull: false,
      },
      emailAddress: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      status: {
        type: dataTypes.STRING(2),
        allowNull: false,
      },
      mobile: {
        type: dataTypes.STRING(),
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING(),
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
        allowNull: true,
      },
      /**
       * 등록한 사용자: 회원가입시 본인
       */
      registerId: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      registerDate: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      /**
       * TODO: 확인 필요
       */
      updateId: {
        type: dataTypes.STRING(),
        allowNull: false,
      },
      updateDate: {
        type: dataTypes.DATE(),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'tb_member',
      modelName: 'Member',
    }
  );

  return Member;
};
