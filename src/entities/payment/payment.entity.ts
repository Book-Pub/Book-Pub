import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentCart } from "../paymentCart/paymentCart.entity";
import { v4 as uuid } from "uuid";

@Entity("payment")
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "card_name" })
  cardName: string;

  @Column({ name: "security_code", nullable: true })
  securityCode: number;

  @Column({ name: "expire_date" })
  expireDate: string;

  @OneToMany(() => PaymentCart, (paymentCart) => paymentCart.payment)
  paymentCart: PaymentCart;

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
