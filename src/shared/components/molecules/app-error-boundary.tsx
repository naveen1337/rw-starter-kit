import React from "react";
import { MainLayout } from "@components";

export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // alert(error)
    console.log(error);
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="m-4 flex justify-center items-center">
            <div>
              <p className="title">Something went wrong</p>
              <p className="title">Refresh a browser, or contact developers</p>
            </div>

            <div className="p-4">
              <code>{this.state.error}</code>
            </div>
          </div>
        </MainLayout>
      );
    }

    return this.props.children;
  }
}
