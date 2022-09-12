import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { PaymentCart } from "../paymentCart/paymentCart.entity";
import { v4 as uuid } from "uuid";
import { User } from "../users/user.entity";

@Entity("payment")
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "card_name" })
  cardName: string;

  @Column({name:"number_card"})
  numberCard: string

  @Column({ name: "expire_date" })
  expireDate: string;

  @OneToMany(() => PaymentCart, (paymentCart) => paymentCart.payment)
  paymentCart: PaymentCart;

  @ManyToOne(type => User, user => user.id)
  userId: string;

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
