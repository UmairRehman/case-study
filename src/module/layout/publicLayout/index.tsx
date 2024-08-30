import Sidebar from "../../../components/shared/sidebar";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components/shared/header/index";

interface Props {
  children?: ReactNode;
}

const PublicLayout: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex">
      <div className="w-[20%] bg-gray-800">
        <Sidebar />
      </div>

      {/* Main area (80% width) */}
      <div className="w-[80%] flex flex-col">
        {/* Header at the top */}
        <Header />

        {/* Content area below the header */}
        <div className="flex-grow p-4 h-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
