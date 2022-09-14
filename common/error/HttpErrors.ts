import statusCodes from '../messages/statusCodes';

export class BaseHttpError extends Error {
  statusCode: statusCodes;
  constructor(name: string, statusCode: statusCodes, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

export class Error204 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.NO_CONTENT, description = '204 No Content') {
    super(name, statusCode, description);
  }
}

export class Error400 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.BAD_REQUEST, description = '400 Bad Request') {
    super(name, statusCode, description);
  }
}

export class Error401 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.UNAUTHORIZED, description = '401 Unauthorized') {
    super(name, statusCode, description);
  }
}

export class Error403 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.FORBIDDEN, description = '403 Forbidden') {
    super(name, statusCode, description);
  }
}

export class Error404 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.NOT_FOUND, description = '404 Not found') {
    super(name, statusCode, description);
  }
}

export class Error409 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.CONFLICT, description = '409 Conflicted') {
    super(name, statusCode, description);
  }
}

export class Error500 extends BaseHttpError {
  constructor(name: string, statusCode = statusCodes.INTERNAL_SERVER_ERROR, description = '500 Internal Server Error') {
    super(name, statusCode, description);
  }
}
