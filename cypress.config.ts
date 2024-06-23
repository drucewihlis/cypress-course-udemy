import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})