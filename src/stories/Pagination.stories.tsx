import React, {ReactElement} from 'react';

import {Pagination, PaginationProps} from 'ui-kit';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    disabled: {control: 'boolean'},
  },
};

const PaginationTemplate = (args: PaginationProps) => {
  return (
    <div style={{height: '200px'}}>
      <Pagination {...args} />
    </div>
  );
};

export const PaginationComponent = (args: PaginationProps): ReactElement => <PaginationTemplate {...args} />;

PaginationComponent.args = {
  defaultCurrent: 1,
  total: 50,
};

export const PaginationMore = (args: PaginationProps): ReactElement => <PaginationTemplate {...args} />;

PaginationMore.args = {
  defaultCurrent: 6,
  total: 500,
};

export const PaginationJumper = (args: PaginationProps): ReactElement => <PaginationTemplate {...args} />;

PaginationJumper.args = {
  defaultCurrent: 6,
  total: 500,
  showQuickJumper: true,
};

export const PaginationSimple = (args: PaginationProps): ReactElement => <PaginationTemplate {...args} />;

PaginationSimple.args = {
  total: 500,
  simple: true,
};

export const PaginationShowTotal = (args: PaginationProps): ReactElement => <PaginationTemplate {...args} />;

PaginationShowTotal.args = {
  total: 500,
  showTotal: (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total} items`,
};
