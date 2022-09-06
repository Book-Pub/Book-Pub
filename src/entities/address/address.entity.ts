import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  streetName: string;

  @Column()
  district: string;

  @Column()
  number: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
