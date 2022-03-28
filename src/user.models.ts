import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.TEXT,
  })
  codigo: string;
  @Column({
    type: DataType.TEXT,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
  })
  nickname: string;

  @Column({
    type: DataType.TEXT,
  })
  country: string;
}
