import { forwardRef, Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventRepository]),
    LocationModule,
  ],
  providers: [EventResolver, EventService]
})
export class EventModule {}
