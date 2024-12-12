import { render } from '@testing-library/react';
import AppWrapper from '../components/common/AppWrapper';

const _render = (ui, options) =>
  render(ui, { wrapper: AppWrapper, ...options });

export * from '@testing-library/react';

export { _render as render };
