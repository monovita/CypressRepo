export const baseConfig = {
  allowCypressEnv: true,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'mochawesome',
  e2e: {setupNodeEvents(on, config) {
      // implement node event listeners here
    }}
}
