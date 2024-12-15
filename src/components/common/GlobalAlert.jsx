import { useDispatch, useSelector } from 'react-redux';
import { ALERT_TYPES } from '../../constants';
import Alert from '../base/Alert';
import { hideAlert } from '../../reducers/modal';

const GlobalAlert = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state.modal);
  const { display = false, type = ALERT_TYPES.SUCCESS, message } = alert;
  if (!display) {
    return null;
  }
  return (
    <Alert type={type} onDismiss={() => dispatch(hideAlert())}>
      {message || 'Something went wrong!'}
    </Alert>
  );
};

export default GlobalAlert;
