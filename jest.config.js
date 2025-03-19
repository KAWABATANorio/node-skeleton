export default {
  "testEnvironment": "node",
  "testMatch": [
    "**/*.test.ts"
  ],
  "transform": {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  "extensionsToTreatAsEsm": [".ts"],
  "transformIgnorePatterns": [],
  "moduleNameMapper": {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  "moduleFileExtensions": ["ts", "js"], 
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]
}
