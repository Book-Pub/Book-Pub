import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { Cart } from "../cart/cart.entity";
import { Categories } from "../category/category.entity";
import { Favorites } from "../favorites/favorites.entity";
import { v4 as uuid } from "uuid";

@Entity("products")
export class Products {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ type: "decimal", precision: 6, scale: 2 })
  value: number;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Favorites)
  favorites: Favorites;

  @ManyToOne(() => Categories)
  categories: Categories;

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
