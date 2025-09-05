import React from "react";
import { Home, Package, Info, BarChart3, HelpCircle } from "lucide-react";
import { FloatingNav } from "../ui/floating-navbar";

export const Header = (): JSX.Element => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "#products",
      icon: <Package className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Size Chart",
      link: "#size-chart",
      icon: <BarChart3 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "FAQ",
      link: "#faq",
      icon: <HelpCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};