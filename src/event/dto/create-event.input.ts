import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateEventInput {

  @Field()
  start_date: string;

  @Field()
  end_date: string;

  @Field()
  name: string;

  @Field({nullable: true})
  description?: string;

  @Field(type => Int)
  locationId: number;
}
