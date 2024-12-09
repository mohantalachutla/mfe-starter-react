import mfeConfig from '#/mfe.config.json';
const { mfe, host } = mfeConfig.events;

export const consumes = {
  ...(host || {}),
};

export const produces = {
  ...(mfe || {}),
};
