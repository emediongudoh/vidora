"use client";

import { useState } from "react";

// Third-party imports
import { Input } from "@/components/ui/input";
import { X, Search } from "lucide-react";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-sm">
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search..."
        className="bg-input py-2 pl-4 pr-14 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className="absolute right-10 top-1/2 -translate-y-1/2"
        >
          <X size={20} />
        </button>
      )}
      <button className="absolute right-3 top-1/2 -translate-y-1/2">
        <Search size={20} />
      </button>
    </div>
  );
};
