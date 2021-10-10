

class BaseError extends Error {

  constructor(message){
    super(message);
    this.name = 'BaseError';
    this.message = message;
  }
}

class NotFoundError extends BaseError{

  constructor(message){
    super(message);
    this.name = 'NotFoundError';
  }
}

class BadRequestError extends BaseError{
  constructor(message){
    super(message);
    this.name = 'BadRequestError';
  }
}

class UnauthorizedError extends BaseError {
  constructor(message){
    super(message);
    this.name = 'UnauthorizedError';
  }
}

module.exports = {
  BaseError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError
};