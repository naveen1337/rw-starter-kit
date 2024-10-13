import { MainLayout, PageUIStatus } from "@components";
import { useContext, useState, useSyncExternalStore } from "react";
import { dataTables, getSnapshot, insert, productTableSub } from "../../state/tables";
import { HomeContext } from "./home-ctrl";
import Products from "./components/ProductsList";
import { PropTypes } from "./home-page";





export default function HomePageUI(props: PropTypes) {
  const ctx = useContext(HomeContext);
  const [state, setState] = useState<any>({});

  const productVersion = useSyncExternalStore(productTableSub, getSnapshot);

  
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
        <Products />

        <h1>New</h1>
        {
           dataTables.products.data.map((item: any) => {
            return (
              <div key={item.id} className="box p-2 inline-block mx-2 ">
                <p>{item.id} - {item.name}</p>
                <p>{item.price}</p>
                {/* <button onClick={() => selectProduct(item.id)} className=" bg-gray-300 p-2 my-2">select</button> */}
              </div>
            )
          })
        }
      </div>
    </MainLayout>
  );
}
