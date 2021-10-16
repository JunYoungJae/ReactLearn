module.exports = async (err, req, res, next) => {
  console.log(err);

  switch(err.name){
    
    case 'ValidationError' || 'BadRequestError':
      res.status(400);
      res.send({
        err: err.message,
      });
      break;
    case 'UnauthorizedError':
      res.status(401);
      res.send({
        error: err.message
      });
      break;
    default:
      res.status(500);
      res.send({
        err: err.message,
      });
      break;
  }

};
