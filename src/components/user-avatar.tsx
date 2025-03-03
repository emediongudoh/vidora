import { cva, VariantProps } from "class-variance-authority";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "size-9",
      sm: "size-6",
      lg: "size-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  name: string;
  imageUrl: string;
  className?: string;
  onClick?: () => void;
}

export const UserAvatar = ({
  name,
  imageUrl,
  className,
  onClick,
  size,
}: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }))}
      onClick={onClick}
    >
      <AvatarImage
        src={imageUrl}
        alt={name}
      />
    </Avatar>
  );
};
