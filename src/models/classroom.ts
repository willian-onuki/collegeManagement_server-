import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { College } from './college';
import { Subject } from './subject';

@Table({
  timestamps: false,
  tableName: 'classroom',
})
export class Classroom extends Model {
  static associate() {
    Classroom.belongsTo(College, {
      foreignKey: 'college_id',
    });
    Classroom.belongsTo(Subject, {
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
  table_capacity!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  locked!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('teachers').split(';');
    },
    set(val: string[]) {
      this.setDataValue('teachers', val.join(';'));
    },
  })
  teachers!: string[];

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  college_id!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  subject_id!: number;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  class_grade!: string;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  protocol!: string;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  image!: string;
}
