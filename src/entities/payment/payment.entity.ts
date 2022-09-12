import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../users/user.entity";

@Entity("payment")
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  user: string;

  @Column({ name: "card_name" })
  cardName: string;

  @Column({ name: "number_card" })
  numberCard: string;

  @Column({ name: "expire_date" })
  expireDate: string;

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
