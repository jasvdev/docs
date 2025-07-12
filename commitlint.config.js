module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'header-max-length': [2, 'always', 120],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'perf',
        'test',
        'build',
        'chore',
        'revert',
        'remove',
      ],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ["root", "project"]],
  }
};
