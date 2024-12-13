import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="px-6 w-full">
        <main className="min-h-screen">
          <Header />
          <Outlet />
        </main>
      </div>
      <div className="p-10 w-full text-center bg-gray-800 mt-10">
        Made with 💗 by Jayan Chinthaka
      </div>
    </>
  );
};

export default AppLayout;
