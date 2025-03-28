// jest.config.js
// const esModules = ["@angular", "@ngrx", "d3"];
module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  collectCoverage: true,  
  coverageReporters: ['html'],
  coverageDirectory: "dist/test-coverage",
  coveragePathIgnorePatterns: [
    "setup-jest.ts",
    "public_api.ts",
    ".module.ts",
    ".interface.ts",
    ".utils.ts",
    ".story.ts",
    "biocatch.js",
    ".js",
    ".actions.ts",
    ".effects.ts",
    ".reducers.ts",
    ".selectors.ts",
    "<rootDir>/src/set-public-path",
    "<rootDir>/src/app/shared/services/parameters",
    "<rootDir>/src/single-spa/",
    "<rootDir>/documentation",
    "src/assets",
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 80,
      functions: 75,
      lines: 80,
    },
  },
  transform: {
    "^.+\\.(ts|html)$": ["ts-jest", {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
      },
    }],
  },
  // transform: {
  //   "^.+\\.(ts|mjs|js|html)$": "jest-preset-angular",
  // },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@angular|@ux-aspects|d3|internmap|delaunator|robust-predicates)/(?!(jest-test))",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/devops_scripts/",
    "<rootDir>/documentation",
    "src/assets",
  ],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "^@tokens/(.*)$": "<rootDir>/src/app/core/application/tokens/$1",
    "^@services/(.*)$": "<rootDir>src/app/core/infrastructure/services/$1",
    "^@DomainConstants/(.*)$": "<rootDir>/src/app/core/domain/models/constants/$1",
    "^@DomainInterfaces/(.*)$": "<rootDir>/src/app/core/domain/models/interfaces/$1",
    "^@DomainRepositories/(.*)$": "<rootDir>/src/app/core/domain/repositories/$1",
    "^@DomainUsesCases/(.*)$": "<rootDir>/src/app/core/domain/usecases/$1",
    "^@ApplicationUseCases/(.*)$": "<rootDir>/src/app/core/application/usecases/$1",
    "^@pages/(.*)$": "<rootDir>/src/app/core/UI/pages/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@models/(.*)$": "<rootDir>/src/app/shared/models/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/app/shared/models/interfaces/$1",
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
 