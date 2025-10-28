import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import 'antd/dist/reset.css'; // для Ant Design v5

const { Title, Text } = Typography;

const App = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: '20px' }}>
      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Введите имя!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Введите описание!' }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: 20 }}>
          <Title level={4}>Отправленные данные:</Title>
          <p>
            <Text strong>Имя:</Text> {submittedData.name}
          </p>
          <p>
            <Text strong>Описание:</Text> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
};

export default App;
