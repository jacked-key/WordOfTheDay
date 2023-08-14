import React from 'react';
import { ApplicationTopbar } from './ApplicationLayout/ApplicationTopbar';
import { Footer } from './ApplicationLayout/Footer';

interface ApplicationLayoutProps {
  children?: React.ReactElement;
}

export function ApplicationLayout(
  props: ApplicationLayoutProps
): React.ReactElement {
  return (
    <>
      <ApplicationTopbar />
      {props.children}
      <Footer />
    </>
  );
}
