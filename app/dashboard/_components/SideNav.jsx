import {
  LibraryBig,
  LineChart,
  MessageSquare,
  Shield,
  icons,
} from "lucide-react";
import React from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My forms ",
      icons: LibraryBig,
      path: "/",
    },
    {
      id: 1,
      name: "responces  ",
      icons: MessageSquare,
      path: "/",
    },
    {
      id: 1,
      name: "analytics",
      icons: LineChart,
      path: "/",
    },
    {
      id: 1,
      name: "Upgrade",
      icons: Shield,
      path: "/",
    },
  ];
  return (
    <div className="h-screen shadow-md border bg-white ">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className="flex items-center gap-3 p-4 hover:bg-primary hover:text-white rounded-lg"
          >
            <menu.icons size={24} />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
