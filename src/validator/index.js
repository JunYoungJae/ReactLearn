const memberValidator = require('./member');

const validate = (data, scheme) => {
  const result = scheme.validate(data);

  if (result.error) {
    console.log('### validate error');
    console.log(result.error);
    
    console.log('#constructor');
    console.log(result.error.constructor);
    throw result.error;
  }

  return result.value;
};

module.exports = {
  validate,
  memberValidator, 
};
