import { Test, TestingModule } from '@nestjs/testing';
import { StudentdatabaseController } from './studentdatabase.controller';

describe('StudentdatabaseController', () => {
  let controller: StudentdatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentdatabaseController],
    }).compile();

    controller = module.get<StudentdatabaseController>(StudentdatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
