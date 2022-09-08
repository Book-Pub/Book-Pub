import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Ebooks } from "../ebooks/ebooks.entity";
import { Products } from "../products/products.entity";

@Entity("favorites")
export class Favorites {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => Ebooks, (ebooks) => ebooks.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  ebooks: Ebooks;

  @OneToMany(() => Products, (products) => products.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  products: Products;

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
