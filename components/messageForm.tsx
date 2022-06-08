import { ClockCircleOutlined, QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space, Tooltip } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ScheduleModal from './scheduleModal';

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
  return <div style={{ columnCount: 3 }}>
    {data.map(item => <Checkbox style={{ marginLeft: 0 }}>
      {item.label}
      <Tooltip title={item.description}>
        <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
      </Tooltip>
    </Checkbox>)}
  </div>

}

const MessageForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  function sendNow() {
    const id = "1";
    router.push(`/messages/${id}/success`);
  }

  return (
    <Form layout="vertical">
      <Form.Item label={<Text strong>Message title</Text>}>
        <Input />
      </Form.Item>
      <Form.Item label={<Text strong>Categories that apply to your message</Text>}>
        {checkboxItems()}
      </Form.Item>
      <Form.Item label={<Text strong>Message body</Text>}>
        <TextArea rows={6} />
      </Form.Item>

      <Space direction="vertical" style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>This message will be sent to #announcements</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Space>
            <Button icon={<ClockCircleOutlined />} onClick={() => setShowModal(true)}>Send later</Button>
            <Button type="primary" icon={<SendOutlined />} onClick={sendNow}>Send now</Button>
          </Space>
        </div>
      </Space>
      <ScheduleModal
        title="Send later"
        subTitle="When would you like to send this message?"
        visible={showModal}
        cancel={() => setShowModal(false)}
        send={() => {}}
        updateScheduledTime={() => {}}
      />
    </Form>
  )
}

export default MessageForm;
