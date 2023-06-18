import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
      
import { Button, Checkbox, Radio,Form, Input } from 'antd';

export default function Dashboard() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
const [form]=Form.useForm()
const handleReset=()=>{
  form.resetFields()
}
const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setTableData(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    

    
  }, []);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];
  const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return (
    <div>
<nav class="navbar navbar-expand-lg  bg-warning mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WebDev</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  <Form
  form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    onSubmit
  >
    <Form.Item
      label="Enter value"
      name="username"
      rules={[{ required: true, message: 'Please Enter Something!' }]}
    >
      <Input />

    <Radio.Group >
      <Radio value={1}>Active</Radio>
    </Radio.Group>
    </Form.Item>
    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" onClick={fetchData} className='me-3' >
        query
      </Button>
      <Button type="primary" onClick={handleReset} htmlType="submit">
        Reset
      </Button>
    </Form.Item>
  </Form>


      <Table dataSource={tableData} columns={columns} loading={loading} rowKey="id" />
    </div>
  )
}
