import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Ebooks")
export class Ebooks {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Favorites, { eager: true })
  favorites: Favorites;

  @ManyToOne(() => Cart, { eager: true })
  cart: Cart;

  @ManyToOne(() => Author, { eager: true })
  author: Author;

  @Column()
  name: string;

  @ManyToOne(() => Categories, { eager: true })
  categories: Categories;

  @Column()
  dateRelease: string;

  @Column()
  bookCover: URL;

  @Column("decimal", { precision: 6, scale: 2 })
  value: number;

  @Column()
  description: string;

  @Column()
  publishingCompany: string;

  @Column()
  language: string;

  @Column({ nullable: true })
  editionNumber: string;

  @Column()
  numberPages: string;

  @Column()
  country: string;

  @Column()
  isbn: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
