import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // C- create R-read (get alll or get one ) U - update D - delete
  async create(
    email: string,
    name: string,
    dob: Date,
    otherInfo?: any,
  ): Promise<User> {
    const user = this.usersRepository.create({
      email,
      name,
      dob,
      other_info: otherInfo,
    });
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: any): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    const updatedUser = await this.usersRepository.save({
      ...user,
      ...updateUserDto,
    });
    return;
  }
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
