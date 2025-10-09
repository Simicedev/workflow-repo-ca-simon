/** @type {import('eslint').Linter.Config[]} */
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  // Base (application) files: browser globals only
  {
    files: ['**/*.js'],
    ignores: ['tests/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true,
        module: true,
        require: true,
      },
    },
  },
  
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: true,
        test: true,
        it: true,
        expect: true,
        beforeAll: true,
        beforeEach: true,
        afterAll: true,
        afterEach: true,
        // Playwright fixtures (added as readonly pragmatically)
        page: true,
      },
    },
  },
  pluginJs.configs.recommended,
];