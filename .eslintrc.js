module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'styled-components',
            group: 'external',
            position: 'before'
          }
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'type'
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true
      }
    ],
    'import/prefer-default-export': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
