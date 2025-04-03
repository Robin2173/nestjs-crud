import { Body, Controller, DefaultValuePipe, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { StudentdatabseService } from './studentdatabse.service';

@Controller('studentdatabase')
export class StudentdatabaseController {
    constructor(private readonly studentDatabseService: StudentdatabseService) {}

    @Post()
      create(
        @Body()
        body: any
      ) {
        const {  name, registration_num, sem,mark } = body;
        return this.studentDatabseService.create(name, registration_num, sem,mark);
      }

      


        @Get(':id')
          findOne(@Param('id') id: number) {
            return this.studentDatabseService.findOne(id);
          }



       @Patch(':id')
        update(
          @Param('id')id:number,
          @Body()
          body: {name: string; registration_num?: string; sem?: number; mark?: number},
        ) {
          return this.studentDatabseService.update(id, body);
        }
        
          @Delete(':id')
          remove(@Param('id') id: number) {
            return this.studentDatabseService.remove(+id);
          }

    @Get('filterBySemesterByQuery')
      filterBySemesterByQuery(@Query('semester') input: any) {
        return this.studentDatabseService.filterBySemster(input);
      }
}


