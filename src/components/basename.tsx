import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export type BasenameProps = React.PropsWithChildren<{ basename?: string }>;

export const Basename: React.ComponentType<BasenameProps> = withRouter((props: BasenameProps & RouteComponentProps) => {
  React.useEffect(() => {
    const { history, basename = '/' } = props;
    history.replace(basename);
  }, []);

  return <>{props.children}</>;
});
