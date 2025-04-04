import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDatabase } from './entities/student_database';
import { Repository } from 'typeorm';
import { StudentNameBySemDto } from './dto/studentNameBySemDto';

@Injectable()
export class StudentdatabseService {
  constructor(
    @InjectRepository(StudentDatabase)
    private studentDatabaseRepository: Repository<StudentDatabase>,
  ) { }

  // C- create R-read (get alll or get one ) U - update D - delete
  async create(

    name: string,
    registration_num: string,
    sem: number,
    mark: number


  ): Promise<StudentDatabase> {
    const student = this.studentDatabaseRepository.create({

      name: name,
      registration_num: registration_num,
      sem: sem,
      mark: mark
    });
    return this.studentDatabaseRepository.save(student);
  }
  async findAll(query?: { sem?: number; name?: string; registration_num?: string }): Promise<StudentDatabase[]> {
    const queryBuilder = this.studentDatabaseRepository.createQueryBuilder('student');

    if (query?.sem) {
      queryBuilder.andWhere('student.sem = :sem', { sem: query.sem });
    }

    if (query?.name) {
      queryBuilder.andWhere('LOWER(student.name) LIKE LOWER(:name)', { name: `%${query.name}%` });
    }

    if (query?.registration_num) {
      queryBuilder.andWhere('student.registration_num = :registration_num', { registration_num: query.registration_num });
    }

    return queryBuilder.getMany();
  }
  // async findAll(): Promise<StudentDatabase[]> {
  //   return this.studentDatabaseRepository.find();
  // }

  async findOne(id: number): Promise<StudentNameBySemDto | null> {
    var record = await this.studentDatabaseRepository.findOne({ where: { id } });
    let obj:StudentNameBySemDto = new StudentNameBySemDto();
    obj.name = record.name;
    obj.sem = record.sem;

    return obj;
  }

  async update(id: number, updateStudentDto: any): Promise<StudentDatabase> {
    const student = await this.studentDatabaseRepository.findOne({ where: { id } });
    if (!student) {
      return null;
    }
    console.log("hyy");

    const updatedStudent = await this.studentDatabaseRepository.save({
      ...student,
      ...updateStudentDto,
    });
    return updatedStudent;
  }

  async remove(id: number): Promise<void> {
    await this.studentDatabaseRepository.delete(id);
  }
  


}
