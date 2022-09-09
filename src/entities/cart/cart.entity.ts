import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Ebooks } from "../ebooks/ebooks.entity";
import { PaymentCart } from "../paymentCart/paymentCart.entity";
import { Products } from "../products/products.entity";
import { v4 as uuid } from "uuid";
import { User } from "../users/user.entity";

@Entity("cart")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => PaymentCart, (paymentCart) => paymentCart.cart)
  paymentCart: PaymentCart[];

  @OneToMany(() => Products, (products) => products.cart, { eager: true })
  products: Products[];

  @OneToMany(() => Ebooks, (ebooks) => ebooks.cart, { eager: true })
  ebooks: Ebooks[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ name: "total_value", type: "decimal", precision: 6, scale: 2 })
  totalValue: number;

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
