import { GlobalOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal, Select, Space, TimePicker } from 'antd';
import Text from 'antd/lib/typography/Text';
import { useState } from 'react';

interface ScheduleModalProps {
  title: string;
  subTitle: string;
  visible: boolean;
  cancel: () => void;
  send: () => void;
  updateScheduledTime: (time: string) => void;
}

const ScheduleModal = ({ title, subTitle, visible, cancel, send, updateScheduledTime }: ScheduleModalProps) => {
  const [scheduledTime, setScheduledTime] = useState('');
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={cancel}
      footer={<div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={send}>
          Send now
        </Button>
        <div>
          <Button onClick={cancel}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => updateScheduledTime(scheduledTime)} >
            Reschedule message
          </Button>
        </div>
      </div>}
    >
      <Space direction="vertical">
        <Text strong>{subTitle}</Text>
        <Space>
          <DatePicker />
          <TimePicker format="HH:mm" minuteStep={30} />
          <Select placeholder="Select time zone" suffixIcon={<GlobalOutlined />} />
        </Space>
      </Space>

    </Modal>
  )
}

export default ScheduleModal;
