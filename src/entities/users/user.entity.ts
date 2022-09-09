import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "../address/address.entity";
import { Cart } from "../cart/cart.entity";
import { Favorites } from "../favorites/favorites.entity";
import { Payment } from "../payment/payment.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ name: "is_adm", default: false })
  isAdm: boolean;

  @Column({ name: "is_active", default: true })
  isActive: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Favorites, { eager: true })
  @JoinColumn()
  favorites: Favorites;

  @OneToOne(() => Payment, { eager: true })
  @JoinColumn()
  payment: Payment;

  @OneToOne(() => Cart, { eager: true })
  @JoinColumn()
  cart: Cart;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
