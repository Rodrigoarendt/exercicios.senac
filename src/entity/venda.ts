import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

import { carrinho } from "./carrinho"

@Entity("tb_venda")
export class venda {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    idcliente: string

    @Column()
    data: string

    @Column()
    status: string
    
    @ManyToOne(() => carrinho)
    @JoinColumn()
    carrinho: carrinho 

}

carrinho: carrinho
