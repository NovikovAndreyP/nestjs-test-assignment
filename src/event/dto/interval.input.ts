import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class IntervalInput {

  @Field()
  start_date: string;

  @Field()
  end_date: string;

}