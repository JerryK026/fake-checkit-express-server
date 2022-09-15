export type UserRegisterDTO = {
  statusCode: number;
  json: {
    status: string;
    data: {
      token: string;
    };
  };
};
