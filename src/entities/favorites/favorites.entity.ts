import { CreateDateColumn,PrimaryColumn,Entity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("favorites")
export class Favorites{
    @PrimaryColumn("uuid")
    id: string

    // @OneToOne(type => User,user => user.id,)
    // @JoinColumn()
    // user:User

    // @OneToMany(type => Ebooks,ebooks => ebooks.id,{eager:true,nullable:true})
    // @JoinColumn()
    // ebooks: Ebooks

    // @OneToMany(type => Products,products => products.id,{eager:true,nullable:true})
    // @JoinColumn()
    // products: Products

    @CreateDateColumn({name:"createdAt"})
    createdAt: Date

    @CreateDateColumn({name:"updatedAt"})
    updatedAt: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

