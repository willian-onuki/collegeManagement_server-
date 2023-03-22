import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'college',
})
export class College extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  neighborhood!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  number!: number;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  image!: string;
}
