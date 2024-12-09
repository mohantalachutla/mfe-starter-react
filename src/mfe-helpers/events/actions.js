import { registry } from '@mohantalachutla/mfe-utils';

import mfeConfig from '#/mfe.config.json';
import { consumes, produces } from './constants';

const dispatchReady = () => {
  registry.dispatch(
    produces.MFE_STARTER_HOST_READY,
    { name: mfeConfig.name },
    {
      event: consumes.HOST_MFE_STARTER_ACKNOWLEDGE,
    }
  );
};
const dispatchDone = () => {
  registry.dispatch(produces.MFE_STARTER_HOST_DONE);
};

export default {
  dispatchReady,
  dispatchDone,
};
