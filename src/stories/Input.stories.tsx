import React, {ReactElement} from 'react';
import {SettingOutlined, UserOutlined, InfoCircleOutlined} from '@ant-design/icons';
import {Button, Input, Select, Space, Tooltip, InputProps, SearchProps, PasswordProps, TextAreaProps} from 'ui-kit';

const {Option} = Select;
const {Search, TextArea, Password} = Input;

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
    status: {control: 'radio', options: ['warning', 'error', '']},
    showCount: {control: 'boolean'},
    allowClear: {control: 'boolean'},
    bordered: {control: 'boolean'},
  },
};

const InputTemplate = (args: InputProps) => {
  return (
    <div style={{width: 300}}>
      <Input {...args} />
    </div>
  );
};
const InputSearchTemplate = (args: InputProps) => {
  return (
    <div style={{width: 300}}>
      <Search {...args} />
    </div>
  );
};
export const InputComponent = (args: InputProps): ReactElement => <InputTemplate {...args} />;

InputComponent.args = {
  placeholder: 'Placeholder...',
};

export const InputPrePostTab = (args: InputProps): ReactElement => {
  return (
    <>
      <InputTemplate prefix={<UserOutlined />} addonAfter={<SettingOutlined />} defaultValue="mysite" />
      <InputTemplate {...args} />
    </>
  );
};

const addonBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const addonAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

InputPrePostTab.args = {
  defaultValue: 'mdm',
  addonBefore,
  addonAfter,
};

export const InputSearch = (args: InputProps): ReactElement => <InputSearchTemplate {...args} />;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

InputSearch.args = {
  placeholder: 'input search text',
  onSearch,
};

const options = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
];

export const InputCompactStyle = (args: InputProps): ReactElement => {
  return (
    <Space.Compact style={{width: 400}}>
      <Select defaultValue="Option 1" options={options} />
      <Input {...args} defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
  );
};

export const InputSearchLoading = (args: InputProps): ReactElement => {
  return (
    <div style={{width: 400}}>
      <Search {...args} />
    </div>
  );
};

InputSearchLoading.args = {
  placeholder: 'Combine input and button',
  loading: true,
  enterButton: true,
};

const TextAreaTemplate = (args: TextAreaProps): ReactElement => {
  return (
    <div style={{width: 400}}>
      <TextArea {...args} />
    </div>
  );
};

export const TextAreaComponent = (args: TextAreaProps): ReactElement => <TextAreaTemplate {...args} />;

TextAreaComponent.args = {
  placeholder: 'textarea',
  rows: 5,
  maxLength: 100,
  autoSize: {minRows: 3, maxRows: 5},
};

export const PasswordComponent = (args: PasswordProps): ReactElement => {
  return (
    <div style={{width: 400}}>
      <Password {...args} />
    </div>
  );
};

export const InputPrefixAndSuffix = (args: InputProps): ReactElement => <InputTemplate {...args} />;

InputPrefixAndSuffix.args = {
  prefix: <UserOutlined />,
  style: {marginTop: 50},
  suffix: (
    <Tooltip title="Extra information">
      <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}} />
    </Tooltip>
  ),
};

export const InputWithClear = (args: InputProps): ReactElement => <InputTemplate {...args} />;

InputWithClear.args = {
  allowClear: true,
};

export const InputStatus = (args: InputProps): ReactElement => <InputTemplate {...args} />;

InputStatus.args = {
  status: 'error',
  placeholder: 'status',
};

export const InputBordered = (args: InputProps): ReactElement => <InputTemplate {...args} />;

InputBordered.args = {
  bordered: false,
  placeholder: 'Borderless',
};
