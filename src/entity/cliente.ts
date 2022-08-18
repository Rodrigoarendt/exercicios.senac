import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

import { venda } from "./venda"

@Entity("tb_cliente")
export class cliente {
    @PrimaryGeneratedColumn()
    idcliente: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string

        
    @OneToMany(() => venda,(venda) => venda.idcliente)
    venda: venda[]

}