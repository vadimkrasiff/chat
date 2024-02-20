import React, {ReactElement} from 'react';

import {Cascader, SelectDefaultOptionType, CascaderProps} from 'ui-kit';

const {SHOW_CHILD} = Cascader;

export default {
  title: 'Example/Cascader',
  component: Cascader,
  argTypes: {},
};

const options: CascaderProps['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
          {
            value: 'nanjing1',
            label: 'Nanjing 1',
          },
          {
            value: 'nanjing2',
            label: 'Nanjing 2',
          },
        ],
      },
    ],
  },
];

const CascaderTemplate = (args: CascaderProps) => {
  return <Cascader {...args} />;
};

const CascaderPanelTemplate = (args: CascaderProps) => {
  return <Cascader.Panel {...args} />;
};

export const CascaderComponent = (args: CascaderProps): ReactElement => <CascaderTemplate {...args} />;

CascaderComponent.args = {
  options,
  placeholder: 'Please select',
};

export const CascaderSearch = (args: CascaderProps): ReactElement => <CascaderTemplate {...args} />;

const filter = (inputValue: string, path: SelectDefaultOptionType[]) =>
  path.some((option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

CascaderSearch.args = {
  options,
  placeholder: 'Please select',
  showSearch: {filter},
};

export const CascaderPanel = (args: CascaderProps): ReactElement => <CascaderPanelTemplate {...args} />;

CascaderPanel.args = {
  options,
  placeholder: 'Please select',
};

export const CascaderTriggerHover = (args: CascaderProps): ReactElement => <CascaderTemplate {...args} />;

CascaderTriggerHover.args = {
  options,
  placeholder: 'Please select',
  expandTrigger: 'hover',
};

export const CascaderChangeSelect = (args: CascaderProps): ReactElement => <CascaderTemplate {...args} />;

CascaderChangeSelect.args = {
  options,
  placeholder: 'Please select',
  changeOnSelect: true,
};

export const CascaderStatus = (args: CascaderProps): ReactElement => <CascaderTemplate {...args} />;

CascaderStatus.args = {
  options,
  placeholder: 'Please select',
  status: 'error',
};

export const CascaderMultiple = (args: CascaderProps): ReactElement => (
  <CascaderTemplate style={{width: '100%'}} {...args} />
);

CascaderMultiple.args = {
  options,
  placeholder: 'Please select',
  multiple: true,
  maxTagCount: 'responsive',
};

export const CascaderShowCheckedStrategy = (args: CascaderProps): ReactElement => (
  <CascaderTemplate style={{width: '100%'}} {...args} />
);

CascaderShowCheckedStrategy.args = {
  options,
  placeholder: 'Please select',
  multiple: true,
  maxTagCount: 'responsive',
  showCheckedStrategy: SHOW_CHILD,
};
