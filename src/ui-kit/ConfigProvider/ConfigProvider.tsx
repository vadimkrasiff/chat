import React, {ReactElement} from 'react';
import {ConfigProvider as AntdConfigProvider} from 'antd';
import {ConfigProviderProps as AntdConfigProviderProps} from 'antd/es/config-provider';
import type {Locale as AntdLocale} from 'antd/es/locale';
import antdEnUS from 'antd/locale/en_US';
import antdRuRU from 'antd/locale/ru_RU';
import type {ThemeConfig as AntdThemeConfig} from 'antd';
export type Locale = AntdLocale;
export const enUS = antdEnUS;
export const ruRU = antdRuRU;

export type ConfigProviderProps = AntdConfigProviderProps;
export type ThemeConfig = AntdThemeConfig;

export const ConfigProvider = (props: ConfigProviderProps): ReactElement => {
  return <AntdConfigProvider {...props} />;
};

ConfigProvider.useConfig = AntdConfigProvider.useConfig;
ConfigProvider.config = AntdConfigProvider.config;
