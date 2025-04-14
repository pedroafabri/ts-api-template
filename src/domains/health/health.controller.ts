import { Get, Route, Tags } from 'tsoa';
import type { CheckResponseDTO } from './dto';
import { HealthService } from './health.service';
import type { IHealthService } from './interfaces';

@Route('health')
@Tags('Health')
export class HealthController {
  service: IHealthService;

  constructor(service: IHealthService = new HealthService()) {
    this.service = service;
  }

  /**
   * Returns the server's health status
   * @returns CheckResponseDTO
   */
  @Get('/')
  check(): CheckResponseDTO {
    return {
      ok: this.service.getHealthStatus(),
    };
  }
}
