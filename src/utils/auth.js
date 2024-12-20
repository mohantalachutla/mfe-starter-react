import { jwtDecode } from 'jwt-decode';
import { TOKEN_KEY } from '../env';

export const verifyToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded?.exp > Date.now() / 1000) {
      return true;
    }
  } catch {
    console.error('Invalid token');
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
  return jwtDecode(getToken());
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
