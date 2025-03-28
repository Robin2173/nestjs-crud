import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string; // Matches 'name' in PostgreSQL table

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ type: 'date' })
  dob: Date; // Corrected type from string to Date

  @Column({ type: 'jsonb', nullable: true })
  other_info: object; // Matches JSONB column

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date; // Matches 'created_at' column in PostgreSQL
}
