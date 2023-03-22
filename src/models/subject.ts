import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'subject',
})
export class Subject extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
