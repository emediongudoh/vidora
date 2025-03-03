"use client";

import { Loader, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";

export const UploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video created!");
      utils.studio.getMany.invalidate();
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return (
    <Button
      variant="site"
      onClick={() => create.mutate()}
      disabled={create.isPending}
    >
      {create.isPending ? <Loader className="animate-spin" /> : <Plus />} Create
    </Button>
  );
};
