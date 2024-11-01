import gatewayConfig from "#/gateway.config.json";
import mfeConfig from "#/mfe.config.json";
const { others, gateway } = gatewayConfig.events;
const { mfe, host } = mfeConfig.events;

export const consumes = {
  ...(gateway || {}),
  ...(host || {}),
};

export const produces = {
  ...(others || {}),
  ...(mfe || {}),
};
