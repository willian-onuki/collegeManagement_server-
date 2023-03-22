import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Subject } from './subject';

@Table({
  timestamps: false,
  tableName: 'teacher',
})
export class Teacher extends Model {
  static associate() {
    Teacher.belongsTo(Subject, {
      foreignKey: 'subject_id',
    });
  }

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  subject_id!: number;
}
