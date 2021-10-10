const bcrypt = require('bcrypt');
const { Model } = require('sequelize');


class Member extends Model {

  isEqualPassword(password){
    console.log('###isEqualPassword');
    console.log(password);
    console.log(this.password);
    const isEqual = bcrypt.compareSync(password, this.password);
    
    return isEqual;
  }
}

module.exports = (sequelize, dataTypes) => {
  Member.init(
    {
      memberNo: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      memberName: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: dataTypes.STRING(4),
        allowNull: true,
      },
      emailAddress: {
        type: dataTypes.STRING(1024),
        allowNull: false,
      },
      status: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: dataTypes.STRING(),
        allowNull: true,
      },
      password: {
        type: dataTypes.STRING(),
        allowNull: false,
        set(value){
          const hash = bcrypt.hashSync(value, 10);
          this.setDataValue('password', hash);
        }
      },
      address: {
        type: dataTypes.STRING(1024),
        allowNull: true,
      },
      lat: {
        type: dataTypes.DOUBLE,
        allowNull: true,
      },
      lng: {
        type: dataTypes.DOUBLE,
        allowNull: true,
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
        allowNull: true,
      },
      registerDate: {
        type: dataTypes.DATE,
        allowNull: true,
      },
      /**
       * TODO: 확인 필요
       */
      updateId: {
        type: dataTypes.STRING(),
        allowNull: true,
      },
      updateDate: {
        type: dataTypes.DATE(),
        allowNull: true,
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
