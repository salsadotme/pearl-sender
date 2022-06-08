import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tooltip } from 'antd';
import type { NextPage } from 'next';
import { useState } from 'react';
import Sidebar from '../../components/sidebar';
import styles from '../../styles/Home.module.css';

function checkboxItems() {
  const data = [
    {
      label: "New NFT drops",
      description: "Our project in the news",
    },
    {
      label: "Mint allowlists",
      description: "Our project in the news",
    },
    {
      label: "Utility announcements",
      description: "Our project in the news",
    },
    {
      label: "Jobs",
      description: "Our project in the news",
    },
    {
      label: "News coverage",
      description: "Our project in the news",
    },
    {
      label: "Security",
      description: "Our project in the news",
    },
    {
      label: "General announcements",
      description: "Our project in the news",
    },
  ];
  return <div>
    {data.map(item => <Checkbox>
      {item.label}
      <Tooltip title={item.description}><QuestionCircleOutlined /></Tooltip>
    </Checkbox>)}
  </div>

}
const NewMessage: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className={styles.container}>
      <Sidebar />

      <div>
        <h1>Create a message</h1>
        <Form layout="vertical">
          <Form.Item label="Message title">
            <Input />
          </Form.Item>
          <Form.Item label="Categories that apply to your message">
            {checkboxItems()}
          </Form.Item>
          <Form.Item label="Message body">
            <Input />
          </Form.Item>

          <div>This message will be sent to #announcements</div>
          <Button>Send later</Button>
          <Button type="primary">Send now</Button>
        </Form>

      </div>
    </div>
  )
}

export default NewMessage;
