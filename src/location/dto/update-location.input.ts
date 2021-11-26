import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateLocationInput {

  @Field(type => Int)
  id: number;

  @Field()
  name: string;

}