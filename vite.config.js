import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Adjust if using a different framework

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-h73h.onrender.com', // Replace with your backend URL
        changeOrigin: true,
        secure: true, // Set to true if using HTTPS for the backend
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

