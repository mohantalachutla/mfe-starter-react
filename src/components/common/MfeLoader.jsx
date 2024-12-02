import React, { useMemo } from "react";
import { webpack } from "@mohantalachutla/mfe-utils";

import ErrorBoundary from "components/commons/ErrorBoundary";

const MfeLoader = ({
  loaderOptions: { url, name, moduleName, defaultComponent, enableCache },
  ...props
}) => {
  const MfePage = useMemo(
    () =>
      React.lazy(() =>
        webpack.loadMfe({
          url,
          name,
          moduleName,
          defaultComponent,
          enableCache,
        })
      ),
    [url, name, moduleName, enableCache, webpack.loadMfe]
  );

  return (
    <div
      className="mfe-loader"
      id={"mfe-loader-" + name + moduleName}
      key={"mfe-loader-" + name + moduleName}
    >
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <MfePage {...props} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MfeLoader;
