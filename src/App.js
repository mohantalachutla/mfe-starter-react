import "mfe-helpers/events/handlers";
import { useEffect } from "react";
import { actions } from "./mfe-helpers";
import Page from "./pages/Page";
// Default module to ba exported
const App = () => {
  useEffect(() => {
    actions.dispatchReady();
  }, []);
  return <Page />;
};
export default App;
