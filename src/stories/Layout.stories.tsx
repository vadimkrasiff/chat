import React, {ReactElement} from 'react';

import {Layout, SiderProps, LayoutProps} from 'ui-kit';

const {Sider} = Layout;

export default {
  title: 'Example/Layout',
  component: Layout,
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    breakpoint: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    collapsed: {control: 'boolean'},
    collapsedWidth: {control: 'number'},
    collapsible: {control: 'boolean'},
    defaultCollapsed: {control: 'boolean'},
    reverseArrow: {control: 'boolean'},
    width: {control: 'number'},
    zeroWidthTriggerStyle: {control: 'object'},
    onBreakpoint: {control: 'function'},
    onCollapse: {control: 'function'},
  },
};

const baseStyle: React.CSSProperties = {
  height: '100px',
  textAlign: 'center',
  color: '#ffffff',
};

const LayoutTemplate = (args: LayoutProps & SiderProps) => {
  return (
    <>
      <Layout style={{...baseStyle, backgroundColor: '#1677ff'}} {...args}>
        Header
      </Layout>
      <Layout style={{...baseStyle, backgroundColor: '#1677ffbf'}} {...args}>
        <Sider>Sider</Sider>
        <div> Content</div>
      </Layout>
      <Layout style={{...baseStyle, backgroundColor: '#1677ff'}} {...args}>
        Footer
      </Layout>
    </>
  );
};

const SiderTemplate = (args: LayoutProps & SiderProps) => {
  return (
    <>
      <Layout style={{...baseStyle, backgroundColor: '#1677ffbf'}} {...args}>
        <Sider {...args}>Sider</Sider>
        <div> Content</div>
      </Layout>
    </>
  );
};

export const SiderComponent = (args: SiderProps): ReactElement => <SiderTemplate {...args} />;

export const LayoutComponent = (args: LayoutProps): ReactElement => <LayoutTemplate {...args} />;

SiderComponent.args = {
  onCollapse: (collapsed: any, type: any) => console.log(collapsed),
};
