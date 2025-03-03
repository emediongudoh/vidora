import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

// Local imports
import { Logo } from "./logo";
import { SearchInput } from "./search-input";
import { UploadModal } from "./upload-modal";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-4 dark:bg-[#121212]">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Logo />
      </div>

      <SearchInput />

      <div className="flex items-center gap-2">
        <UploadModal />
        <ModeToggle />

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="site">Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};
