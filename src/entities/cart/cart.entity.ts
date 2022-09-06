import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentCart } from "../paymentCart/paymentCart.entity";

@Entity("cart")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => PaymentCart, (paymentCart) => paymentCart.cart)
  paymentCart: PaymentCart[];

  @OneToMany(() => Products, (products) => products.cart, { eager: true })
  products: Products[];

  @Column({ type: "decimal", precision: 6, scale: 2, nullable: false })
  totalValue: number;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date;
}
