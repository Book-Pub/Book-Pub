import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Author } from "../author/author.entity";
import { Cart } from "../cart/cart.entity";
import { Categories } from "../category/category.entity";
import { Favorites } from "../favorites/favorites.entity";

@Entity("Ebooks")
export class Ebooks {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ name: "date_release" })
  dateRelease: string;

  @Column({ name: "book_cover" })
  bookCover: URL;

  @Column("decimal", { precision: 6, scale: 2 })
  value: number;

  @Column()
  description: string;

  @Column({ name: "publishing_company" })
  publishingCompany: string;

  @Column()
  language: string;

  @Column({ name: "edition_number", nullable: true })
  editionNumber: string;

  @Column({ name: "number_pages" })
  numberPages: string;

  @Column()
  country: string;

  @Column()
  isbn: string;

  @ManyToOne(() => Favorites)
  favorites: Favorites;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Author, { eager: true })
  author: Author;

  @ManyToOne(() => Categories, { eager: true })
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
