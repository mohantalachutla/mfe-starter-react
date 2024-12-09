import { registry } from '@mohantalachutla/mfe-utils';
import actions from './actions';
export const _consumes = {
  HOST_MFE_STARTER_ACKNOWLEDGE: ({ name }) => {
    console.log('Mfe Starter Acknowledged Host', name);
    actions.dispatchDone({ name });
  },
};

registry.registerAll({
  ..._consumes,
});
