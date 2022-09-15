import { Timestamp } from 'typeorm';

export default interface IUserSession {
  id: number;
  userId: number;
  refreshToken: string;
  accessToken: string;

  created_at: Timestamp;
  updated_at: Timestamp;
  expired_at: Timestamp;
}
