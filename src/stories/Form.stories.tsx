import React, {ReactElement} from 'react';
import {Button, Checkbox, Form, Input, InternalFormProps, FormItemProps, FormInstance} from 'ui-kit';

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    layout: {control: 'radio', options: ['inline', 'vertical', 'horizontal']},
    requiredMark: {control: 'radio', options: ['optional', false, '']},
    size: {control: 'radio', options: ['default', 'small', 'large']},
    labelAlign: {control: 'radio', options: ['left', 'right']},
  },
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const FormTemplate = ({name, ...args}: InternalFormProps) => {
  return (
    <>
      <Form {...args}>
        <Form.Item<FieldType>
          label={name || 'Username'}
          name="username"
          rules={[
            {required: true, message: 'Please input your username!'},
            {type: 'email', warningOnly: true},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const UseFormTemplate = (args: InternalFormProps) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({username: 'Username', password: 'password'});
  };

  const onFinish = (values: Record<string, unknown>) => {
    console.log(values);
  };

  return (
    <>
      <Form form={form} onFinish={onFinish} {...args}>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const SubmitButton = ({form}: {form: FormInstance}) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({validateOnly: true}).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const FormValidateOnlyTemplate = ({name, ...args}: InternalFormProps) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} {...args}>
        <Form.Item<FieldType>
          label={name || 'Username'}
          name="username"
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <SubmitButton form={form} />
        </Form.Item>
      </Form>
    </>
  );
};

export const FormComponent = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormComponent.args = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  style: {maxWidth: 600},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const UseForm = (args: InternalFormProps): ReactElement => {
  return <UseFormTemplate {...args} />;
};

UseForm.args = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  style: {maxWidth: 600},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormLayout = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormLayout.args = {
  layout: 'inline',
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormDisabled = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormDisabled.args = {
  disabled: true,
  labelCol: {span: 4},
  style: {maxWidth: 600},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormRequiredStyle = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormRequiredStyle.args = {
  requiredMark: 'optional',
  layout: 'vertical',
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormSize = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormSize.args = {
  size: 'default',
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormLabelWrap = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormLabelWrap.args = {
  name: 'long long long label wrap',
  labelAlign: 'left',
  labelWrap: true,
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormWarningOnly = (args: InternalFormProps): ReactElement => <FormTemplate {...args} />;

FormWarningOnly.args = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

export const FormValidateOnly = (args: InternalFormProps): ReactElement => <FormValidateOnlyTemplate {...args} />;

FormValidateOnly.args = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
  initialValues: {remember: true},
  autoComplete: 'off',
};

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({prefix, children}: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({name, ...props}: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

export const FormPathPrefix = (args: InternalFormProps): ReactElement => {
  const onFinish = (value: Record<string, unknown>) => {
    console.log(value);
  };
  return (
    <Form {...args} name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="firstName" label="First Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="lastName" label="Last Name">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="age" label="Age">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
