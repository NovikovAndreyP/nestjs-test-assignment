import { Injectable } from '@nestjs/common';
import { Location } from './location.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateLocationInput } from './dto/create-location.input';
import { LocationRepository } from './location.repository';
import { EventRepository } from '../event/event.repository';
import { DeleteResult } from 'typeorm';
import { UpdateLocationInput } from './dto/update-location.input';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationRepository)
    private locationRepository: LocationRepository,
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  createLocation(createLocationInput: CreateLocationInput): Promise<Location> {
    const newLocation = this.locationRepository.create(createLocationInput);

    return this.locationRepository.save(newLocation);
  }

  async findAll(): Promise<Location[]> {
    const location = new Location();
    return this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    return this.locationRepository.findOneOrFail(id);
  }

  async updateLocation(updateLocationInput: UpdateLocationInput): Promise<Location>{
    return this.locationRepository.save({...updateLocationInput});
  }

  async removeLocation(id: number): Promise<DeleteResult>{
    await this.eventRepository.delete({locationId: id});
    return this.locationRepository.delete(id);
  }
}
