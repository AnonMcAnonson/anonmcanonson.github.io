import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod"; // 1. Ensure zod is explicitly imported

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.md",
  // 2. Change 'schema: (z) => ({...})' to a straight object validated by zod:
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
  }),
  transform: (doc) => {
    const slug = doc._meta.path.replace(/\.md$/, "");
    return {
      ...doc,
      slug,
    };
  },
});

export default defineConfig({
  content: [posts],
});
