import { config, fields, collection } from "@keystatic/core";

// Check if the current environment is local development
const isDev = import.meta.env.DEV;

export default config({
  // --- ENVIRONMENT-BASED STORAGE CONTROLLER ---
  storage: isDev
    ? {
        // Local Mode: Reads and writes directly to your local file system
        kind: "local",
      }
    : {
        // Production/Cloud Mode: Connects straight to the GitHub API
        kind: "github",
        repo: "your-github-username/your-repo-name", // <-- CHANGE TO YOUR REPO
      },

  // --- CONTENT COLLECTIONS SCHEMA ---
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      // The destination folder where markdown files are read and stored
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary", multiline: true }),
        date: fields.date({ label: "Published Date" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
});
