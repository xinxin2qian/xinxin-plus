module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修改bug' },
    { value: 'ci', name: 'ci:     持续集成修改' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 代码重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     优化相关，比如提升性能、体验' },
    { value: 'test', name: 'test:     测试用例修改' },
    { value: 'chore', name: 'chore:    其他修改, 比如改变构建流程、或者增加依赖库、工具等' },
    { value: 'revert', name: 'revert:   回滚到上一个版本' },
    { value: 'build', name: 'build:    编译相关的修改，例如发布版本、对项目构建或者依赖的改动' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    scope: '请输入文件修改范围(必填):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
};
