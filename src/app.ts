import express from 'express';
import connection from './db/config';
import { collegeRoutes } from './routes/college';
import { json, urlencoded } from 'body-parser';
import { userRoutes } from './routes/user';
import { teacherRoutes } from './routes/teacher';
import { subjectRoutes } from './routes/subject';
import { classroomRoutes } from './routes/classroom';
import cors from 'cors';
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use(cors())

app.use('/college', collegeRoutes);
app.use('/user', userRoutes);
app.use('/teacher', teacherRoutes);
app.use('/subject', subjectRoutes);
app.use('/classroom', classroomRoutes);

app.use((
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
  ) => {
    res.status(500).json({message: err.message})
  }
)

connection.sync().then(() => {
  console.log('Database connection successfully')
}).catch((err) => {
  console.log('Database connection error:', err)
})

app.listen(3333, () => {
  console.log('HTTP server listening on');
});
