import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useNavigate = () => {
  const history = useHistory();
  return useCallback(
    (...props) => {
      history.push(...props);
    },
    [history]
  );
};

export default useNavigate;
