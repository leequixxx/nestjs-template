import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 32})
  firstName: string;

  @Column({nullable: true, length: 64})
  lastName: string;

  @Column({unique: true, length: 24})
  username: string;

  @Column()
  password: string;
}
