import "mfe-helpers/events/handlers";
import { useEffect } from "react";
import { actions } from "./mfe-helpers";
// Default module to ba exported
const App = () => {
  useEffect(() => {
    actions.dispatchReady();
  }, []);
  return (
    <div className="container">
      <div>Welcome</div>
    </div>
  );
};
export default App;
