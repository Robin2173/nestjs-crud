import { Test, TestingModule } from '@nestjs/testing';
import { StudentdatabseService } from './studentdatabse.service';

describe('StudentdatabseService', () => {
  let service: StudentdatabseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentdatabseService],
    }).compile();

    service = module.get<StudentdatabseService>(StudentdatabseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
