import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/-Protein_detail/',
  plugins: [react(), tailwindcss()],
});
