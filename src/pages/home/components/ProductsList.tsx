import { useSyncExternalStore } from "react";
import { getSnapshot, dataTables, productTableSub, insert } from "../../../state/tables";

export default function Products() {
    const productVersion = useSyncExternalStore(productTableSub, getSnapshot);

    function createProduct() {
        insert("products", [{
            "id": Math.floor(Math.random() * 1000),
            "name": "apple",
            "price": 100,
        }]);
    }

    return (
        <div>
            <div>

            <button onClick={() => createProduct()} className=" bg-gray-300 p-2 my-2">Add new product</button>
            </div>

            {
                dataTables.products.data.map((item: any) => {
                    return (
                        <div key={item.id} className="box p-2 inline-block mx-2 ">
                            <p>{item.id} - {item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>

    )

}