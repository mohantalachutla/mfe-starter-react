import { TOKEN_KEY } from '../env';

export const verifyToken = (token) => {
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return (
    (localStorage && localStorage.getItem(TOKEN_KEY)) ||
    (sessionStorage && sessionStorage.getItem(TOKEN_KEY)) ||
    (globalThis && globalThis[TOKEN_KEY])
  );
};
export const getUser = () => {
  return {
    username: 'test',
    email: 'test',
    firstName: 'test',
    lastName: 'test',
    status: 'test',
    displayName: 'test',
    // displayPicture: Buffer.from('', 'base64').toString('ascii'), // Todo: polyfill for Buffer
    ssn: 'test',
    createdAt: 'test',
    updatedAt: 'test',
    roles: [],
    permissions: [],
  };
};

export const setToken = (token) => {
  if (localStorage) {
    localStorage.setItem(TOKEN_KEY, token);
  } else if (sessionStorage) {
    sessionStorage.setItem(TOKEN_KEY, token);
  } else if (globalThis) {
    globalThis[TOKEN_KEY] = token;
  }
};

export const removeToken = () => {
  if (localStorage) {
    localStorage.removeItem(TOKEN_KEY);
  } else if (sessionStorage) {
    sessionStorage.removeItem(TOKEN_KEY);
  } else if (globalThis) {
    delete globalThis[TOKEN_KEY];
  }
};

export const isVerifiedUser = () => {
  return verifyToken(getToken());
};
