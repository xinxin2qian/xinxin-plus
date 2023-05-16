import { resolve } from 'path';
import packageJson from '../package.json';

export const rootResolve = (...args) => resolve(__dirname, '../', ...args);
export const packagesResolve = (...args) => resolve(__dirname, '../packages', ...args);
export const examplesResolve = (...args) => resolve(__dirname, '../examples', ...args);
export const getExternalList = () => {
  const deps = { ...packageJson.devDependencies, ...packageJson.dependencies };
  const list: string[] = [];
  for (const key in deps) {
    list.push(key);
  }
  return list;
};
