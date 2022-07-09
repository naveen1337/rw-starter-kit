// import { MainLayout } from "@components";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return null;

  return (
    <MainLayout>
      <div className="flex items-center p-8 justify-center">
        <div>
          <p className="text-[80px] font-bold text-center">400</p>
          <p className="text-3xl font-med pt-6 text-center">Not found</p>

          <Link to="/">
            <div className="bg-secondary-400 p-3 my-6 flex justify-center">
              <p className="text-center text-base text-white">
                Go back to Home
              </p>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
