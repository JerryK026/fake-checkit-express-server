import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import IUserSession from './IUserSession';

@Entity()
export class UserSession implements IUserSession {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // session은 나중에 redis 등으로 뺄 수도 있기 때문에 User 연관관계 처리하지 않음.
  @Column()
  userId: number;

  @Column()
  refreshToken: string;

  @Column()
  accessToken: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Timestamp;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Timestamp;

  @DeleteDateColumn({ type: 'timestamp' })
  expired_at: Timestamp;
}
