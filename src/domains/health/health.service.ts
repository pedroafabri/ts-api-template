import type { IHealthService } from './interfaces';

export class HealthService implements IHealthService {
  getHealthStatus(): boolean {
    return true;
  }
}
