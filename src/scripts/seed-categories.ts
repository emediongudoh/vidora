import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryData = [
  {
    name: "Entertainment",
    imageUrl: "/categories/entertainment.jpg",
  },
  {
    name: "Gaming",
    imageUrl: "/categories/gaming.jpg",
  },
  {
    name: "Music & Audio",
    imageUrl: "/categories/music.jpg",
  },
  {
    name: "Education",
    imageUrl: "/categories/education.jpg",
  },
  {
    name: "News & Commentary",
    imageUrl: "/categories/news.jpg",
  },
  {
    name: "Lifestyle",
    imageUrl: "/categories/lifestyle.jpg",
  },
  {
    name: "Finance & Investing",
    imageUrl: "/categories/finance.jpg",
  },
  {
    name: "Health & Fitness",
    imageUrl: "/categories/health.jpg",
  },
  {
    name: "Tech & Gadgets",
    imageUrl: "/categories/tech.jpg",
  },
  {
    name: "Documentary & Storytelling",
    imageUrl: "/categories/documentary.jpg",
  },
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryData.map(category => ({
      name: category.name,
      description: `Videos related to ${category.name.toLowerCase()}`,
      imageUrl: category.imageUrl,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
