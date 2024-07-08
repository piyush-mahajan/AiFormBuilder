import {
  LibraryBig,
  LineChart,
  MessageSquare,
  Shield,
  icons,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "../../../@/components/ui/progress";
import { Button } from "../../../@/components/ui/button";

import React, { useEffect } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My forms ",
      icons: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 1,
      name: "responces  ",
      icons: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 1,
      name: "analytics",
      icons: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icons: Shield,
      path: "/dashboard/upgrade",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen shadow-md border bg-white ">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 hover:bg-primary cusrosr-pointer hover:text-white rounded-lg ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icons size={24} />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-7 p-6 w-64">
        <Button variant="outline" className="w-full">
          + Create Form
        </Button>
        <div className="my-7">
          <Progress value={33}></Progress>
          <h2 className="text-sm mt-2 text-grey-600">
            <strong>2</strong> out of <strong> 5</strong> being used{" "}
          </h2>
          <h2 className="text-sm mt-3 text-grey-600">
            upgrade your plan for unlimited AI forms
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
