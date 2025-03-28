import { identity } from 'rxjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Decimal128,
} from 'typeorm';

@Entity('student_database')
export class StudentDatabase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable:false })
  name: string; // Matches 'name' in PostgreSQL table

  @Column({ nullable:false })
  registration_num: string;

  @Column({ type: 'integer',nullable:false })
  sem: number; // Corrected type from string to Date

  @Column({ type: 'integer', nullable: false })
  mark: number; 

}
