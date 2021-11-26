import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from '../../location/location.entity';

@Entity()
@ObjectType()
export class Event {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({type: 'timestamp with time zone'})
  @Field(type => GraphQLISODateTime)
  start_date: string;

  @Column({type: 'timestamp with time zone'})
  @Field(type => GraphQLISODateTime)
  end_date: string;

  @Column()
  @Field()
  name: string;

  @Column({nullable: true})
  @Field({nullable: true})
  description?: string;

  @Column()
  @Field(type => Int)
  locationId: number;

  @ManyToOne(() => Location, location => location.events)
  @Field(type => Location)
  location: Location
}
