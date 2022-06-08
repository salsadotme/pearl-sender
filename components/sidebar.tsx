import { ClockCircleOutlined, FileOutlined, HomeOutlined, SendOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';

const items: any[] = [
  {
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    label: "Draft messages",
    icon: <FileOutlined />,
  },
  {
    label: "Sent messages",
    icon: <SendOutlined />,
  },
  {
    label: "Scheduled messages",
    icon: <ClockCircleOutlined />,
  },
]
const Sidebar = () => {
  return (
    <Sider width={200}>
      <Menu
      style={{ height: "100%"}}
        items={items}
      />
    </Sider>
  )
}

export default Sidebar;
