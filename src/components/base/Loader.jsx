import { useSelector } from "react-redux";

export const Loader = () => {
  const { loading, loadingType, loadingMessage } = useSelector(
    (state) => state.loader
  );
  const DefaultLoader = <div>{loadingMessage || "Loading..."}</div>;
  const Spinner = () => {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
        {loadingMessage && <span>{loadingMessage}</span>}
      </div>
    );
  };

  const getLoader = () => {
    switch (loadingType) {
      case "spinner":
        return Spinner;
      case "text":
        return DefaultLoader;
      default:
        return Spinner;
    }
  };

  return <div>{loading && getLoader()}</div>;
};
