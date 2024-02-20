import React, {ReactElement, useState} from 'react';

import {Transfer, TransferProps, TransferDirection} from 'ui-kit';

export default {
  title: 'Example/Transfer',
  component: Transfer,
  argTypes: {},
};

const TransferTemplate = (args: TransferProps<any>) => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <Transfer
      {...args}
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  );
};

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData: RecordType[] = Array.from({length: 20}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

export const TransferComponent = (args: TransferProps<any>): ReactElement => <TransferTemplate {...args} />;

export const TransferOneWay = (args: TransferProps<any>): ReactElement => <TransferTemplate {...args} />;

TransferOneWay.args = {
  oneWay: true,
};

export const TransferSearch = (args: TransferProps<any>): ReactElement => <TransferTemplate {...args} />;

const filterOption = (inputValue: string, option: RecordType) => option.description.indexOf(inputValue) > -1;

const onSearch = (dir: TransferDirection, value: string) => {
  console.log('search:', dir, value);
};

TransferSearch.args = {
  showSearch: true,
  onSearch,
  filterOption,
};

export const TransferPagination = (args: TransferProps<any>): ReactElement => <TransferTemplate {...args} />;

TransferPagination.args = {
  pagination: true,
};

export const TransferStatus = (args: TransferProps<any>): ReactElement => <TransferTemplate {...args} />;

TransferStatus.args = {
  status: 'error',
};
