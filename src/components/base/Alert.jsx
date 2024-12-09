import { Alert as FlowbiteAlert } from 'flowbite-react';

export const Alert = ({ children, type, ...props }) => {
  return (
    <FlowbiteAlert {...props} color={type}>
      {children}
    </FlowbiteAlert>
  );
};

export const ErrorAlert = ({ children, message, body, ...props }) => {
  return (
    <Alert type={AlertType.error} additionalContent={body} {...props}>
      {message || children}
    </Alert>
  );
};
