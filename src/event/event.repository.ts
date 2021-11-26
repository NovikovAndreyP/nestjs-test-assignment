import { Between, EntityRepository, Repository } from 'typeorm';
import { Event } from './entities/event.entity';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {

  findByLocationId(locationId: number): Promise<Event[]> {
    return this.find({locationId});
  }

  findByInterval(start_date: string, end_date: string): Promise<Event[]> {
    return this.find({
      where: {
        start_date: Between(start_date, end_date)
      }
    });
  }

}