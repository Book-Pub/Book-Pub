import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Cart } from "../cart/cart.entity";
import { Payment } from "../payment/payment.entity";
import { v4 as uuid } from "uuid";

@Entity("payment_cart")
export class PaymentCart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Payment)
  payment: Payment;

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
