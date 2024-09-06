import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/Mactavish410/informative-tool", // Убедитесь, что здесь указано имя вашего репозитория
  build: {
    rollupOptions: {
      input: "./index.html", // Убедитесь, что у вас есть файл index.html
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Явно укажите зависимости
  },
});
