import { Navbar } from "@/components/studio-ui/navbar";
import { Sidebar } from "@/components/studio-ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Navbar />

        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
