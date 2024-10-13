import z from "zod"

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
})

const schemaMap = {
    "productSchema": productSchema
}

export const dataTables:any = {
    products: {
        schema: "productSchema",
        data: [{
            "id":"000",
            "name":"Init product",
            "price":100
        }],
        version: {"key":"default"}
    }
}

export function randomNum(number:number){
    return Math.floor(Math.random() * number)
}

export let listeners:any = new Map();

export function productTableSub(func:any){
    listeners.set("products",func)
    return () => {
        listeners.delete("products")
    };
  }

export function insert(inputTable: any, payload: any[]) {
    try {
        const table = dataTables[inputTable]
        if (!table) return undefined
        for(let item of payload){
            table.data.push(item)
        }
        const old = table.version
        table.version = new Object({"key":randomNum(100)})
        const newO = table.version

        console.log("Is same",old === newO)
        const func = listeners.get(inputTable)
        func()
    } catch (excep) {
        console.error(excep)
        return null
    }
}

export function getSnapshot(){
    return dataTables["products"].version
  }


function listen(table: string) {
    console.log("change detected")
}

// const data2 = dataTables.products.data

// console.log("isEqual",data === data2)

// console.log(JSON.stringify(dataTables, null, 1))


