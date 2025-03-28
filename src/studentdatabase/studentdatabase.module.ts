import { Module } from '@nestjs/common';
import { StudentDatabase } from './entities/student_database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentdatabaseController } from './studentdatabase.controller';
import { StudentdatabseService } from './studentdatabse.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentDatabase])],
  controllers: [StudentdatabaseController],
  providers: [StudentdatabseService],
})
export class StudentdatabaseModule {}
