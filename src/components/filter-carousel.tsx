"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelectAction: (value: string | null) => void;
  data: {
    categoryId: string;
    name: string;
    imageUrl: string;
  }[];
}

export const FilterCarousel = ({
  value,
  onSelectAction,
  data,
  isLoading,
}: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      {/* Left fade */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-8 top-0 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-black",
          current === 1 && "hidden"
        )}
      />

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-8"
      >
        <CarouselContent className="-ml-4">
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-auto pl-4"
              >
                <Skeleton className="h-44 w-32 rounded-lg border">
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}

          {!isLoading &&
            data.map(item => (
              <CarouselItem
                key={item.categoryId}
                className="basis-auto pl-4"
                onClick={() => onSelectAction(item.categoryId)}
              >
                <div className="flex cursor-pointer flex-col gap-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={1200}
                    height={1200}
                    className="h-44 w-32 rounded-lg border object-cover hover:opacity-80"
                  />
                  <p
                    className={`text-center text-xs font-medium ${item.categoryId === value ? "text-lime-600" : ""}`}
                  >
                    {item.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* Right fade */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-8 top-0 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-black",
          current === count && "hidden"
        )}
      />
    </div>
  );
};
