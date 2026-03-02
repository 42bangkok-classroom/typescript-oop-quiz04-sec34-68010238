import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}
  @Get('summary')
  getSummary(): { ACTIVE: number; COMPLETED: number; FAILED: number } {
    return this.missionService.getSummary();
  }
}