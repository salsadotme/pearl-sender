import { ClockCircleOutlined, QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tooltip } from 'antd';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useState } from 'react';
import NavContainer from '../../components/navContainer';

function checkboxItems() {
  const data = [
    {
      label: "New NFT drops",
      description: "New drops from our product",
    },
    {
      label: "Mint allowlists",
      description: "Allowlist spots from other projects (collaborations)",
    },
    {
      label: "Utility announcements",
      description: "New utility and product updates",
    },
    {
      label: "Jobs",
      description: "Job opportunities",
    },
    {
      label: "News coverage",
      description: "Our project in the news",
    },
    {
      label: "Security",
      description: "Security announcements",
    },
    {
      label: "General announcements",
      description: "Anything else",
    },
  ];
  return <div>
    {data.map(item => <Checkbox>
      {item.label}
      <Tooltip title={item.description}>
        <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
      </Tooltip>
    </Checkbox>)}
  </div>

}
const NewMessage: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <NavContainer>
      <Title level={1}>Create a message</Title>
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

        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>This message will be sent to #announcements</div>
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <Button icon={<ClockCircleOutlined />} style={{ marginRight: "10px"}}>Send later</Button>
            <Button type="primary" icon={<SendOutlined />}>Send now</Button>
          </div>
        </div>
      </Form>
    </NavContainer>
  )
}

export default NewMessage;
