import { MainLayout, PageUIStatus } from "@components";
import { PageProps } from "@types/app";
import { useContext, useRef } from "react";

import { HomeContext } from "./home-ctrl";

interface PropTypes extends PageProps {}

export default function HomePageUI(props: PropTypes) {
  const ctx = useContext(HomeContext);

  if (props.pageLoading || !ctx) {
    return <PageUIStatus error={false} />;
  }
  if (props.pageError) {
    return <PageUIStatus error={true} />;
  }

  return (
    <MainLayout>
      <div className="p-6">
        <h1>Home Page</h1>
      </div>
    </MainLayout>
  );
}
