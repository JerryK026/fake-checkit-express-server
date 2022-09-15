export type LoginDTO = {
  statusCode: number;
  status: string;
  data: {
    token: string;
  };
};
