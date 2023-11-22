// jest.config.js
module.exports = {
    preset: 'jest-puppeteer',
    "globals": {
        "PATH": "http://localhost:8080"
      },
      "testMatch": [
        "**.test.js"
      ],
}