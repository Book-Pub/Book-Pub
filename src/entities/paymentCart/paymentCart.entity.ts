import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Cart } from "../cart/cart.entity";

@Entity("payment_cart")
export class PaymentCart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Payment)
  payment: Payment;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date;
}
