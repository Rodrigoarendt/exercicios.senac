import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { carrinho } from "./carrinho"

@Entity("tb_produto")
export class produto {
    @PrimaryGeneratedColumn()
    idproduto: number

    @Column()
    descricao: string

    @Column()
    preco: string

    @Column()
    estoque: string
    
    @OneToOne(() => produto)
    @JoinColumn()
    produto: produto

}

carrinho: carrinho