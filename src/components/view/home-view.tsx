import { CategoriesSection } from "../section/categories-section";

interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
