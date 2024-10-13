import { MainLayout, PageUIStatus } from "@components";
import { useContext, useState, useSyncExternalStore } from "react";
import { dataTables, getSnapshot, insert, productTableSub } from "../../state/tables";
import { HomeContext } from "./home-ctrl";
import Products from "./components/ProductsList";
import { PropTypes } from "./home-page";
import Title from "./components/title";
import Cart from "./components/cart";
import { Link } from "react-router-dom";





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

      <Link to="/product">Go to Product</Link>

        <Title text={"one"} />
        <Cart text={"cart1"} />

      </div>
    </MainLayout>
  );
}
