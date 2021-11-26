import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { EventService } from './event.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Location } from '../location/location.entity';
import { IntervalInput } from './dto/interval.input';
import { DeleteResult } from 'typeorm';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Query(() => [Event])
  findEventsByLocationId(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.findByLocationId(id);
  }

  @Query(() => [Event])
  findEventsByInterval(@Args('intervalInput') intervalInput: IntervalInput) {
    return this.eventService.findByInterval(intervalInput.start_date, intervalInput.end_date);
  }

  @ResolveField(returns => Location)
  location(@Parent() event: Event): Promise<Location> {
    return this.eventService.getLocation(event.locationId);
  }

  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput): Promise<Event> {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Boolean)
  async removeEvent(@Args('id', { type: () => Int }) id: number) {
    const deleteResult = await this.eventService.remove(id);
    return deleteResult.affected != 0;
  }
}
