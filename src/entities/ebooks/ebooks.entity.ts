import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Author } from "../author/author.entity";
import { Categories } from "../category/category.entity";
import { Favorites } from "../favorites/favorites.entity";
import { Order } from "../order/order.entity";
import { OrderEbooks } from "../orderBooks/orderEbooks.entity";

@Entity("ebooks")
export class Ebooks {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ name: "date_release" })
  dateRelease: string;

  @Column({ name: "book_cover" })
  bookCover: string;

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

  @OneToMany(() => OrderEbooks, (orderEbooks) => orderEbooks.ebooks, { eager: true })
  @JoinColumn()
  orderEbooks: OrderEbooks;

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
