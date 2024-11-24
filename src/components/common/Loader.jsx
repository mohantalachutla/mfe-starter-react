import { useSelector } from "react-redux";
import { Spinner as FlowbiteSpinner } from "flowbite-react";

export const Loader = () => {
  const {
    loading,
    loadingType: type,
    loadingMessage: message,
  } = useSelector((state) => state.loader);
  if (loading) {
    return <_Loader type={type} message={message} />;
  }
  return null;
};

const _Loader = (props) => {
  switch (props?.type) {
    case "spinner":
      return <Spinner {...props} />;
    case "text":
      return <DefaultLoader {...props} />;
    default:
      return <Spinner {...props} />;
  }
};

const DefaultLoader = ({ message }) => {
  <div>{message || "Loading..."}</div>;
};

const Spinner = ({ message }) => {
  return (
    <div className="text-center">
      <FlowbiteSpinner aria-label="Center-aligned spinner example" />
      {message && <span>{message}</span>}
    </div>
  );
};
