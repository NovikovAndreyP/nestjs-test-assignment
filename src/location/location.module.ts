import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationRepository } from './location.repository';
import { EventRepository } from '../event/event.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocationRepository, EventRepository]),
  ],
  providers: [LocationService, LocationResolver],
  exports: [LocationService]
})
export class LocationModule {}
