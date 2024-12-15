import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};
