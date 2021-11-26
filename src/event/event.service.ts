import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { LocationService } from '../location/location.service';
import { Location } from '../location/location.entity';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
    private locationService: LocationService,
  ) {
  }
  create(createEventInput: CreateEventInput): Promise<Event> {
    const newEvent = this.eventRepository.create(createEventInput);

    return this.eventRepository.save(newEvent);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOneOrFail(id);
  }

  update(id: number, updateEventInput: UpdateEventInput): Promise<Event> {

    return this.eventRepository.save({
      ...updateEventInput
    });
  }

  remove(id: number) {
    return this.eventRepository.delete(id);
  }

  findByLocationId(id: number): Promise<Event[]> {
    return this.eventRepository.findByLocationId(id);
  }

  findByInterval(start_date: string, end_date: string): Promise<Event[]> {
    return this.eventRepository.findByInterval(start_date, end_date);
  }

  getLocation(locationId: number): Promise<Location> {
    return this.locationService.findOne(locationId);
  }
}
