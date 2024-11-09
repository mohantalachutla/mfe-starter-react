import { useSelector } from "react-redux";

export default Loader = () => {
  const { loading, loadingType, loadingMessage } = useSelector(
    (state) => state.loader
  );
  const defaultLoader = <div>{loadingMessage || "Loading..."}</div>;

  const getLoader = () => {
    switch (loadingType) {
      case "default":
        return defaultLoader;
      default:
        return defaultLoader;
    }
  };

  return <div>{loading && getLoader()}</div>;
};
