import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { Cart } from "../cart/cart.entity";

@Entity("products")
export class Products {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ type: "decimal", precision: 6, scale: 2, nullable: false })
  value: number;

  @ManyToOne(() => Cart)
  cart: Cart;

  // @ManyToOne(() => Favorites)
  // favorites: Favorites;

  // @ManyToOne(() => Categories)
  // favorites: Categories;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date;
}
