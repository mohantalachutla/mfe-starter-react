import packageJson from '../../package.json';
export const getProjectName = ({ camelCase = false } = {}) => {
  let parts = packageJson.name.split('/');
  let projectName = parts[parts.length - 1];
  if (camelCase) {
    projectName = projectName.replace(/[-_]([a-z])/g, (g) =>
      g[1].toUpperCase()
    );
  }
  return projectName;
};
export const getOrgName = ({ camelCase = false } = {}) => {
  let parts = packageJson.name.split('/');
  let orgName = parts > 1 ? parts[0] : '';
  if (camelCase) {
    orgName = orgName.replace(/[-_]([a-z])/g, (g) => g[1].toUpperCase());
  }
  return orgName;
};
