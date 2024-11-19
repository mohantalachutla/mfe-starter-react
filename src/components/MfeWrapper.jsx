import { Provider } from "react-redux";
import store from "../store";
import { Loader } from "./base";

export default MfeWrapper = ({ children }) => {
  return (
    <div id="mfe-wrapper">
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export const withWrapper = (Component) => (props) =>
  (
    <MfeWrapper>
      <Loader />
      <Component {...props} />
    </MfeWrapper>
  );
