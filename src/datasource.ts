import { DataSource } from "typeorm"
import { cliente } from "./entity/cliente"
import { venda } from "./entity/venda"
import { carrinho } from "./entity/carrinho"
import { produto } from "./entity/produto"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    //entities: ["dist/**/*./entity/*.ts"],
    entities: [cliente, venda, carrinho, produto],
    logging: false,
    synchronize: true,
})

export default dataSource