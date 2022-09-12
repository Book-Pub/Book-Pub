import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Ebooks } from "../ebooks/ebooks.entity";
import { User } from "../users/user.entity";

@Entity("favorites")
export class Favorites {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => Ebooks, (ebooks) => ebooks.favorites, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  ebooks: Ebooks;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @CreateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
