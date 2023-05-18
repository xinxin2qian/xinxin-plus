const cp = require('child_process');
const pck = require('../package.json');

const logInfo = (...args) => {
  console.log(...args);
};
const execSpawn = (command, args, options) => {
  const win32 = process.platform === 'win32';
  const cmd = win32 ? 'cmd' : command;
  const cmdArgs = win32 ? ['/c'].concat(command, args) : args;
  return cp.spawn(cmd, cmdArgs, options || {});
};

const execCommand = (
  command,
  args,
  options = {
    cwd: process.cwd(),
    stdio: 'inherit'
  }
) =>
  new Promise((resolve, reject) => {
    const p = execSpawn(command, args, options);
    p.on('error', reject);
    p.on('exit', code => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
const updatePckVersion = async () => {
  const versionType = process.argv[2] || 'patch';
  await execCommand('npm', ['version', versionType]);
  logInfo('update pck version success');
};
const commitFile = async () => {
  await execCommand('git', ['add', 'package.json']);
  await execCommand('git', ['commit', '-m', 'chore(package.json): update version']);
  await execCommand('git', ['push']);
  logInfo('commit pck file success');
};

const publishPck = async () => {
  await execCommand('npm', ['publish']);
  logInfo('publish success');
};

const buildTag = async () => {
  await execCommand('git', ['tag', `v${pck.version}`, '-m', `release ${pck.version}`]);
  await execCommand('git', ['push', 'origin', `v${pck.version}`]);
  logInfo('build tag success');
};
const run = async () => {
  updatePckVersion();
  await publishPck();
  await commitFile();
  await buildTag();
};

run();
