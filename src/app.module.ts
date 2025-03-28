import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { StudentDatabase } from './studentdatabase/entities/student_database';
import { StudentdatabaseModule } from './studentdatabase/studentdatabase.module';

@Module({
  imports: [
    // psql connection build btw nest js and db psql
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'robin123',
      database: 'postgres', // Replace with your database name
      entities: [
        User,
        StudentDatabase
      ],
      synchronize: false,
    }),
    UserModule,
    StudentdatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
