"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

// Third-party imports
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";

// Local imports
import { FilterCarousel } from "../filter-carousel";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

export const CategoriesSectionSkeleton = () => {
  return (
    <FilterCarousel
      isLoading
      data={[]}
      onSelectAction={() => {}}
    />
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();

  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, imageUrl, id }) => ({
    categoryId: id,
    name: name,
    imageUrl: imageUrl,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-medium">Top categories</h2>
      <FilterCarousel
        value={categoryId}
        data={data}
        onSelectAction={onSelect}
      />
    </div>
  );
};
