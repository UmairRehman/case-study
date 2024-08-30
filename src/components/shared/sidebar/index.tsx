import React from "react";
import { Button } from "../../ui/button"; // Import the necessary ShadCN components

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-center text-2xl font-bold">My App</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Button
              variant="outline"
              className="w-full flex items-center space-x-2"
            >
              <span>Home</span>
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              className="w-full flex items-center space-x-2"
            >
              <span>Profile</span>
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              className="w-full flex items-center space-x-2"
            >
              <span>Settings</span>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
