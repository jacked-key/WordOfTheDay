import * as React from 'react';
import { ApplicationLayout } from '../modules/common/ApplicationLayout';
import { AppProps } from 'next/app';

/**
 * _app.tsx needed to create global layout
 */
interface ApplicationProps {
  // your props
}

export default function Application({
  Component,
  pageProps,
}: AppProps<ApplicationProps>): React.ReactElement {
  return (
    <div>
      <ApplicationLayout>
        <Component {...pageProps} />
      </ApplicationLayout>
    </div>
  );
}
