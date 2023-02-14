module.exports = {
  // ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'body-leading-blank': [2, 'always'],
    // 'footer-leading-blank': [1, 'always'],
    // 'header-max-length': [2, 'always', 108],
    // 'subject-empty': [2, 'never'],
    // 'type-empty': [2, 'never'],
    // 'subject-case': [0]
    'type-enum': [
      2,
      'always',
      ['ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'build', 'chore', 'revert', 'style', 'test', 'revert']
    ]
    // 'type-empty': [2, 'never'], // <type> 不能为空
    // 'type-case': [0],
    // 'scope-empty': [2, 'never'], // <scope> 不能为空
    // 'scope-case': [0],
    // 'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
    // 'header-max-length': [0, 'always', 72] // header 最长72
  }
};
