import React from "react";

export interface Route {
  path: string,
  footer?: React.Component | React.FunctionComponent | null,
  main: React.ComponentType<any>,
  status?: string,
  mode?: 'user',
  icon?: string,
  title?: string,
  exact?: any
}