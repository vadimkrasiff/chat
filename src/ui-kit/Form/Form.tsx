import React, {ReactElement} from 'react';
import {Form as AntForm} from 'antd';
import styles from './Form.module.scss';
import classNames from 'classnames';
import InternalForm from 'antd/es/form/Form';
import {FormProps as AntdFormProps, FormItemProps as AntdFormItemProps} from 'antd/lib';
import {FormInstance as AntdFormInstance} from 'antd/es/form';
import {Rule as AntdRule} from 'antd/es/form';

export type Rule = AntdRule;
export type FormItemProps = AntdFormItemProps;
export type FormInstance<Values = any> = AntdFormInstance<Values>;
export type FormProps = AntdFormProps;

export type InternalFormType = typeof InternalForm;
export type InternalFormProps = AntdFormProps<any> & {
  children?: React.ReactNode;
} & {
  ref?: React.Ref<AntdFormInstance<any>> | undefined;
};

export const Form = (props: InternalFormProps): ReactElement => {
  return <AntForm {...props} className={classNames(styles.form, props.className)} />;
};

Form.useForm = AntForm.useForm;
Form.useFormInstance = AntForm.useFormInstance;
Form.useWatch = AntForm.useWatch;
Form.Item = AntForm.Item;
Form.Item.useStatus = AntForm.Item.useStatus;
Form.List = AntForm.List;
Form.ErrorList = AntForm.ErrorList;
