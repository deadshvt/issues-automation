import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${process.env.TOKEN}`,
    },
  },
});