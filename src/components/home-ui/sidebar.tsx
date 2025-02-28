"use client";

import Link from "next/link";
import { Fragment } from "react";

// Third-party imports
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

// Local imports
import { homeSidebarSections } from "@/configs";

export const Sidebar = () => {
  return (
    <ShadcnSidebar
      collapsible="icon"
      className="w-52 pt-[69px]"
    >
      <SidebarContent>
        {homeSidebarSections.map(section => (
          <Fragment key={section.label}>
            <SidebarGroup>
              {section.label && (
                <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
              )}

              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map(item => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.label}
                        onClick={() => {}}
                        isActive={false}
                        className="h-11"
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

            <Separator />
          </Fragment>
        ))}
      </SidebarContent>
    </ShadcnSidebar>
  );
};
