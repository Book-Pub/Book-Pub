import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    // @OneToOne(() => Address, { nullable: false, eager: true })
    // address: Address

    // @OneToOne(() => Favorites)
    // favorites: Favorites

    // @OneToOne(() => PaymentInfo)
    // paymenteInfo: PaymentInfo

    // @OneToOne(() => Cart)
    // cart: Cart

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}