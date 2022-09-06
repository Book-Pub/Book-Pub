import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("author")
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Ebooks, (ebooks) => ebooks.author)
  ebooks: Ebooks[];

  @Column()
  name: string;

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
