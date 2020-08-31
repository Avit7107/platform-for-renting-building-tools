import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LogIn = (props) => {

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="phone number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="phone number"
          placeholder="מספר טלפון"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
           <Link to="/prducts">
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            הרשם
          </Button>
          
       </Link>
        )}
      </Form.Item>
    </Form>
  );
};


export default LogIn;