import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { assertWrappingType } from 'graphql';
import { DeleteResult } from 'typeorm';
import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(of => Location)
export class LocationResolver {
  constructor(private locationService: LocationService) {
  }

  @Query(returns => [Location])
  locations(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Query(returns => Location)
  getLocation(@Args('id', { type: () => Int }) id: number): Promise<Location> {
    return this.locationService.findOne(id);
  }

  @Mutation(returns => Location)
  createLocation(@Args('createLocationRequest') createLocationRequest: CreateLocationInput): Promise<Location> {
    return this.locationService.createLocation(createLocationRequest);
  }

  @Mutation(returns => Location)
  updateLocation(@Args('updateLocationInput') updateLocationInput: UpdateLocationInput): Promise<Location> {
    return this.locationService.createLocation(updateLocationInput);
  }

  @Mutation(returns => Boolean)
  async deleteLocation(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    const deleteResult: DeleteResult = await this.locationService.removeLocation(id);
    return deleteResult.affected != 0;
  }

}
