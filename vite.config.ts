import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import contentCollections from "@content-collections/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), contentCollections()],
});
