import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../event/entities/event.entity';

@Entity()
@ObjectType()
export class Location {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Event, event => event.location)
  @Field(type => [Event], {nullable: true})
  events?: Event[];
}
