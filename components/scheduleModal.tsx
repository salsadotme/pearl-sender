import { GlobalOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal, Select, Space, TimePicker } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Moment } from 'moment';
import moment from "moment-timezone";
import { useState } from 'react';

interface ScheduleModalProps {
  title: string;
  subTitle: string;
  visible: boolean;
  cancel: () => void;
  send: () => void;
  updateScheduledTime: (time: string) => void;
}

function formatTimezone(n: string) {
  return `GMT ${moment.tz(n).format('Z')} ${n}`;
}

const possibleTimeZones = moment.tz.names().map(n => ({
  label: formatTimezone(n),
  value: n,
}));

const ScheduleModal = ({ title, subTitle, visible, cancel, send, updateScheduledTime }: ScheduleModalProps) => {
  const [date, setDate] = useState<Moment | null>(moment());
  const [time, setTime] = useState<Moment | null>(moment());
  const [timezone, setTimezone] = useState('');

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={cancel}
      footer={<div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* TODO: remove when on the new message screen */}
        {/*<Button onClick={send}>
          Send now
  </Button>*/}
        <div />
        <div>
          <Button onClick={cancel}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => updateScheduledTime(time!.format())} >
            {/* TODO: fix this copy when on the new message screen */}
            Schedule message
          </Button>
        </div>
      </div>}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Text strong>{subTitle}</Text>
        <Space style={{ width: "100%" }} className="select-time-container">
          <DatePicker value={date} onChange={setDate} />
          <TimePicker value={time} onChange={setTime} format="HH:mm" minuteStep={30} style={{ width: "90px" }} />
          <Select
            showSearch
            value={timezone}
            onSelect={setTimezone}
            className="timezone-select"
            placeholder="Select time zone"
            suffixIcon={<GlobalOutlined />}
            options={possibleTimeZones}
            style={{ width: "100%" }}
          />
        </Space>
        <div style={{ opacity: "45%" }}>
          Your timezone: {formatTimezone(moment.tz.guess())}
        </div>
      </Space>

    </Modal>
  )
}

export default ScheduleModal;
