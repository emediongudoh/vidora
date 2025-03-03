import Link from "next/link";

// Third-party imports
import {
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

// Local imports
import { UserAvatar } from "../user-avatar";

export const UserButton = () => {
  const { user } = useUser();
  const { state } = useSidebar();

  if (!user) {
    return (
      <SidebarHeader className="flex items-center justify-center">
        <Skeleton className="size-24 rounded-full" />
        <div className="flex flex-col items-center gap-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
      </SidebarHeader>
    );
  }

  if (state === "collapsed") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip="Your profile"
        >
          <Link
            prefetch
            href="/users/current"
          >
            <UserAvatar
              imageUrl={user.imageUrl}
              name={user.fullName ?? "User"}
              size="sm"
            />
            <p className="text-sm text-muted-foreground">Your profile</p>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarHeader className="flex flex-col items-center">
      <Link href="/users/current">
        <UserAvatar
          name={user.fullName || "User"}
          imageUrl={user?.imageUrl}
          className="size-24"
        />
      </Link>

      <h5 className="font-medium">Your profile</h5>
      <p className="text-muted-foreground">{user.fullName}</p>
    </SidebarHeader>
  );
};
