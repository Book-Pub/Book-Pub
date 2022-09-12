import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "../users/user.entity";
import { OrderEbooks } from "../orderBooks/orderEbooks.entity";

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => OrderEbooks, (orderEbooks) => orderEbooks.order)
  orderEbooks: OrderEbooks;

  @ManyToOne(() => User)
  user: User;

  @Column({ default: "Order Created" })
  status: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
