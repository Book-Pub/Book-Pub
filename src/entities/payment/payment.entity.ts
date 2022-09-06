import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentCart } from "../paymentCart/paymentCart.entity";

@Entity("payment")
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "card_name", nullable: false })
  cardName: string;

  @Column({ name: "security_code", nullable: true })
  securityCode: number;

  @Column({ name: "expire_date", nullable: false })
  expireDate: string;

  @OneToMany(() => PaymentCart, (paymentCart) => paymentCart.payment)
  paymentCart: PaymentCart;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date;
}
