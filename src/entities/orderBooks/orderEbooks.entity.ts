import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Ebooks } from "../ebooks/ebooks.entity";
import { Order } from "../order/order.entity";

@Entity("order_ebooks")
export class OrderEbooks {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Order)
  order: Order;

  @OneToMany(() => Ebooks, (ebooks) => ebooks.orderEbooks)
  ebooks: Ebooks;

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
