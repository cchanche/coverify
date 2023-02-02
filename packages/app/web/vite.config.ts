import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.');
  return {
    plugins: [eslint(), react()],
    server: {
      host: true,
      port: Number(env.VITE_SERVER_PORT) || 3000,
    },
  };
});
