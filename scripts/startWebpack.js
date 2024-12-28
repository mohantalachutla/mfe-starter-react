//Others
const dotEnv = require('dotenv');
const dotEnvConfig = dotEnv.config();
const dotenv_expand = require('dotenv-expand').expand;
dotenv_expand(dotEnvConfig);
const { spawn } = require('child_process');
const axios = require('axios');
const process = require('process');
const mfeConfig = require('../mfe.config.json');
const packageJson = require('../package.json');

// Set up the HTTP client
const httpClient = axios.create({
  baseURL: `${process.env.APP_REGISTRY_URI}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRegistered = false;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const spawnWebpackProcess = () => {
  return process.env.NODE_ENV === 'production'
    ? spawn('serve', ['-s', 'lib', '-p', packageJson.app.port], {
        stdio: 'inherit',
        shell: true,
      })
    : spawn(
        'webpack',
        [
          'serve',
          '--mode',
          'development',
          '--live-reload',
          '--hot',
          '--config',
          './webpack/webpack.config.cjs',
        ],
        {
          stdio: 'inherit',
          shell: true,
        }
      );
};
// Spawn the Webpack process
const webpackProcess = spawnWebpackProcess();

const registerApp = async () => {
  const { name, url, modules = [], events = {} } = mfeConfig;
  try {
    await httpClient.post('/app/register', {
      name,
      url,
      modules,
      events,
      env: process.env.NODE_ENV,
      version: packageJson.version,
      description: packageJson.description,
      dependencies: packageJson.dependencies,
      devDependencies: packageJson.devDependencies,
      peerDependencies: packageJson.peerDependencies,
      optionalDependencies: packageJson.optionalDependencies,
      homepage: packageJson.homepage,
      author: packageJson.author,
      license: packageJson.license,
      repository: packageJson.repository,
      engines: packageJson.engines,
      browserslist: packageJson.browserslist,
      keywords: packageJson.keywords,
    });
    console.log('App started ');
    isRegistered = true;
  } catch (error) {
    console.error('App failed to start ', error);
    sleep(4000);
    webpackProcess.kill('SIGINT');
    process.exit(1);
  }
};

// Function to unregister the app
const unregisterApp = async () => {
  const { name } = mfeConfig;
  if (isRegistered) {
    try {
      console.log('Attempting to unregister the app...');
      await httpClient.post('/app/unregister', {
        name,
      });
      console.log('App successfully unregistered');
    } catch (error) {
      console.error('Failed to unregister app:', error.message);
    }
  }
};

// Listen for process exit signals
const handleExit = async (signal) => {
  console.log(`Received ${signal}. Cleaning up...`);
  await unregisterApp(); // Call API to unregister the app
  process.exit(0); // Exit after cleanup
};

// Handle common signals on main process
[
  'SIGINT',
  'SIGTERM',
  'SIGHUP',
  'SIGBREAK', // ctrl+break
  'SIGUSR1', // kill -USR1
  'SIGUSR2',
].forEach((signal) => {
  process.on(signal, () => handleExit(signal));
});

// Register the app on startup
webpackProcess.on('spawn', async () => {
  await registerApp();
});

// Handle common signals on Webpack process
[
  'uncaughtException', // uncaught exception
  'unhandledRejection', // promise rejection
  'beforeExit', // exit
].forEach((signal) => {
  webpackProcess.on(signal, async () => {
    console.log(`webpackProcess: Received ${signal}. Cleaning up...`);
    await unregisterApp(); // Call API to unregister the app
  });
});

// Listen for Webpack process exit
webpackProcess.on('exit', async (code) => {
  console.log(`Webpack process exited with code ${code}`);
  await unregisterApp(); // Ensure app is unregistered when Webpack exits
  process.exit(code); // Exit with the same code as Webpack
});

// Listen for errors
webpackProcess.on('error', async (error) => {
  console.error('Failed to start Webpack:', error.message);
  await unregisterApp();
  process.exit(1);
});
