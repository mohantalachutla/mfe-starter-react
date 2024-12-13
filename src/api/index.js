import httpClient from '../utils/httpClient';

export const getHello = () => {
  return httpClient.get('/api/hello');
};
