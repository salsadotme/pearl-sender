import { ClockCircleOutlined, QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Space, Tooltip } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ScheduleModal from './scheduleModal';

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

const MessageForm = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);

  const router = useRouter();

  function sendNow() {
    const id = "1";
    router.push(`/messages/${id}/success`);
  }

  function checkboxItems() {
    return <div style={{ columnCount: 3 }}>
      {data.map(item => <Checkbox onChange={e => updateCategories(item.label, e.target.checked)} style={{ marginLeft: 0 }}>
        {item.label}
        <Tooltip title={item.description}>
          <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
        </Tooltip>
      </Checkbox>)}
    </div>
  }

  function updateCategories(category: string, checked: boolean) {
    if (checked) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter(c => c !== category));
    }
  }

  return (
    <Form layout="vertical">
      <Form.Item label={<Text strong>Message title</Text>}>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label={<Text strong>Categories that apply to your message</Text>}>
        {checkboxItems()}
      </Form.Item>
      <Form.Item label={<Text strong>Message body</Text>}>
        <TextArea rows={6} value={content} onChange={e => setContent(e.target.value)} />
      </Form.Item>

      <Space direction="vertical" style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>This message will be sent to #announcements</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Space>
            <Button
              icon={<ClockCircleOutlined />}
              onClick={() => setShowScheduleModal(true)}
              disabled={!title || categories.length === 0 || !content}
            >
              Send later
            </Button>
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={() => setShowSendModal(true)}
              disabled={!title || categories.length === 0 || !content}
            >
              Send now
            </Button>
          </Space>
        </div>
      </Space>
      <Modal
        title="Send now"
        visible={showSendModal}
        onCancel={() => setShowSendModal(false)}
        okText="Confirm"
        onOk={sendNow}
      >
        Please confirm you want to send your message now
      </Modal>
      <ScheduleModal
        title="Send later"
        subTitle="When would you like to send this message?"
        visible={showScheduleModal}
        cancel={() => setShowScheduleModal(false)}
        send={() => { }}
        updateScheduledTime={() => { }}
      />
    </Form>
  )
}

export default MessageForm;
