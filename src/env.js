import packageJson from '../package.json';
if (!process.env.API_URL) throw new Error('API_URL is not defined');
export const API_URL = process.env.API_URL;
export const TOKEN_KEY = process.env.TOKEN_KEY || packageJson.name + 'token';
export const NODE_ENV = process.env.NODE_ENV;
