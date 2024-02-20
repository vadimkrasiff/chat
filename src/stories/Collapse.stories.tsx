import React, {ReactElement} from 'react';

import {Collapse, Divider, CollapseProps} from 'ui-kit';

export default {
  title: 'Example/Collapse',
  component: Collapse,
  argTypes: {
    size: {control: 'radio', options: ['middle', 'small', 'large']},
    collapsible: {control: 'radio', options: ['header', 'icon', 'disabled']},
    accordion: {control: 'boolean'},
  },
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const CollapseTemplate = (args: CollapseProps) => {
  return <Collapse {...args} />;
};

export const CollapseComponent = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseComponent.args = {
  items,
};

export const CollapseSize = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseSize.args = {
  size: 'large',
  items,
};

export const CollapseAccordion = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseAccordion.args = {
  accordion: true,
  items,
};

const itemsNest: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel nest panel',
    children: <p>{text}</p>,
  },
];

const itemsPanel: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <Collapse defaultActiveKey="1" items={itemsNest} />,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

export const CollapseNestedPanel = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseNestedPanel.args = {
  items: itemsPanel,
};

export const CollapseBorderless = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseBorderless.args = {
  items,
  bordered: false,
};

export const CollapseGhost = (args: CollapseProps): ReactElement => <CollapseTemplate {...args} />;

CollapseGhost.args = {
  items,
  ghost: true,
};

export const CollapseCollapsible = (args: CollapseProps): ReactElement => {
  return (
    <>
      <Divider>{args.collapsible}</Divider>
      <CollapseTemplate {...args} />
    </>
  );
};

CollapseCollapsible.args = {
  collapsible: 'disabled',
  items,
};
