import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDatabase } from './entities/student_database';
import { Repository } from 'typeorm';

@Injectable()
export class StudentdatabseService {
    constructor(
        @InjectRepository(StudentDatabase)
        private studentDatabaseRepository: Repository<StudentDatabase>,
      ) {}

       // C- create R-read (get alll or get one ) U - update D - delete
        async create(
        
          name: string,
          registration_num: string,
          sem: number,
          mark: number

         
        ): Promise<StudentDatabase> {
          const student = this.studentDatabaseRepository.create({
      
           name:name,
            registration_num:registration_num,
            sem:sem,
            mark:mark
          });
          return this.studentDatabaseRepository.save(student);
        }
      
        async findAll(): Promise<StudentDatabase[]> {
          return this.studentDatabaseRepository.find();
        }

        async findOne(id: number): Promise<StudentDatabase | null> {
            return this.studentDatabaseRepository.findOne({ where: { id } });
          }
        
          async update(id: number, updateStudentDto: any): Promise<StudentDatabase> {
            const student = await this.studentDatabaseRepository.findOne({ where: { id } });
            if (!student) {
              return null;
            }
            const updatedStudent = await this.studentDatabaseRepository.save({
              ...student,
              ...updateStudentDto,
            });
            return;
          }
          async remove(id: number): Promise<void> {
            await this.studentDatabaseRepository.delete(id);
          }
      
}
