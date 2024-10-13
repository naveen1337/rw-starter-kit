import { MainLayout, PageUIStatus } from "@components";
import { PageProps } from "@types/app.js";
import { useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { dataTables, getSnapshot, insert, pSubscribe } from "../../state/tables"


import { HomeContext } from "./home-ctrl";

interface PropTypes extends PageProps { }




export default function HomePageUI(props: PropTypes) {
  const ctx = useContext(HomeContext);
  const [state, setState] = useState<any>({})


  const snapshot = useSyncExternalStore(pSubscribe, getSnapshot)

  console.log(dataTables["products"])

  function selectProduct(id: string) {
    insert("products", [{
      "id": Math.floor(Math.random() * 1000),
      "name": "apple",
      "price": 100,
    }])

    // setState(new Object({}))
    // console.log("selectProduct",id)
  }


  if (props.pageLoading || !ctx) {
    return <PageUIStatus error={false} />;
  }
  if (props.pageError) {
    return <PageUIStatus error={true} />;
  }

  return (
    <MainLayout>
      <div className="p-6">
        <h1>Products Page</h1>
        {
          dataTables["products"].data.map((item: any) => {
            return (
              <div key={item.id} className="box p-2 my-2 inlin">
                <p>{item.id} - {item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => selectProduct(item.id)} className=" bg-gray-300 p-2 my-2">select</button>
              </div>
            )
          })
        }
      </div>
    </MainLayout>
  );
}
