import { registry } from "@mohantalachutla/mfe-utils";
import { consumes, produces } from "./constants";
import actions from "./actions";
export const _consumes = {
  HOST_MFE_STARTER_ACKNOWLEDGE: ({ name }) => {
    console.log("Mfe Starter Acknowledged Host", name);
    actions.dispatchDone({ name });
  },
};

const _gateway = {
  [consumes.GATEWAY_OTHERS_ACKNOWLEDGE]: (data) => {
    console.log("Mfe Starter Acknowledged Gateway");
    registry.dispatch(produces.OTHERS_GATEWAY_DONE, data);
  },
};

registry.registerAll({
  ..._consumes,
  ..._gateway,
});
