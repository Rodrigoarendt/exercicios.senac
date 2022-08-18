import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { produto } from "./produto"
import { venda } from "./venda"

@Entity("tb_carrinho")
export class carrinho {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    idproduto: string

    @Column()
    quantidade: string

    @Column()
    preco: string
    
    @ManyToOne(() => venda)
    @JoinColumn()
    venda: venda

    @ManyToOne(() => produto)
    @JoinColumn()
    produto: produto
}
