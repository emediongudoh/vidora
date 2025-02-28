import Link from "next/link";

// Third-party imports
import { Video } from "lucide-react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <Video className="size-6 text-lime-600" />{" "}
      <span className="font-medium">Vidora</span>
    </Link>
  );
};
