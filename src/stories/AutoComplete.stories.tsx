import React, {ReactElement, useState} from 'react';

import {AutoComplete, message} from 'ui-kit';
import {AutoCompleteProps, SelectDefaultOptionType} from 'ui-kit';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {},
};

const AutoCompleteTemplate = (args: AutoCompleteProps) => {
  return <AutoComplete {...args} />;
};

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});

export const AutoCompleteComponent = (args: AutoCompleteProps): ReactElement => {
  const [options, setOptions] = useState<SelectDefaultOptionType[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    message.info('onSelect ' + data);
  };

  return (
    <AutoCompleteTemplate
      {...args}
      options={options}
      style={{width: 200}}
      onSelect={onSelect}
      onSearch={(text) => setOptions(getPanelValue(text))}
      placeholder="input here"
    />
  );
};

AutoCompleteComponent.args = {
  style: {
    width: 200,
  },
};
