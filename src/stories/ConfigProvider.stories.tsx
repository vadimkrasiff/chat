import React, {ReactElement, useState} from 'react';

import {ConfigProvider, Radio, Table, enUS, ruRU, RadioChangeEvent, Locale} from 'ui-kit';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

export default {
  title: 'Example/ConfigProvider',
  component: ConfigProvider,
  argTypes: {},
};

dayjs.locale('en');

export const ConfigProviderComponent = (): ReactElement => {
  const [locale, setLocal] = useState<Locale>(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('ru');
    }
  };

  return (
    <div>
      <Radio.Group value={locale} onChange={changeLocale}>
        <Radio.Button key="en" value={enUS}>
          English
        </Radio.Button>
        <Radio.Button key="cn" value={ruRU}>
          Русский
        </Radio.Button>
      </Radio.Group>
      <ConfigProvider locale={locale}>
        <div>
          <Table />
        </div>
      </ConfigProvider>
    </div>
  );
};
