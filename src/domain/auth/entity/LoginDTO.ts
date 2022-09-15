export type LoginDTO = {
  statusCode: number;
  json: {
    status: string;
    token: string;
  };
};
