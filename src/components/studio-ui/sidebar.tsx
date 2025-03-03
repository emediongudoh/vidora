"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Third-party imports
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Local imports
import { studioSidebarSections } from "@/constants";
import { UserButton } from "./user-button";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ShadcnSidebar
      collapsible="icon"
      className="z-40 w-52 pt-[69px]"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <UserButton />

              {studioSidebarSections.map(item => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    className="h-11"
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon /> {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};
