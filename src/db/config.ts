import { Sequelize } from 'sequelize-typescript';
import { Classroom } from '../models/classroom';
import { College } from '../models/college';
import { Subject } from '../models/subject';
import { Teacher } from '../models/teacher';
import { User } from '../models/user';

const connection = new Sequelize('collegedb', 'root', 'willian1', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
  models: [User, College, Teacher, Subject, Classroom],
});

export default connection;
