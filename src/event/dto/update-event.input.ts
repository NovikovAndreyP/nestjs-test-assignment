import { CreateEventInput } from './create-event.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field(() => Int)
  id: number;

  @Field({nullable: true})
  start_date?: string;

  @Field({nullable: true})
  end_date?: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;
}
