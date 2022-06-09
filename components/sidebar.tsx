import { ClockCircleOutlined, FileOutlined, HomeOutlined, SendOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import Link from 'next/link';

const items: any[] = [
  {
    label: <Link href="/">Home</Link>,
    icon: <HomeOutlined />,
    key: "home",
  },
  {
    label: <Link href="/messages/drafts">Draft messages</Link>,
    icon: <FileOutlined />,
    key: "drafts",
  },
  {
    label: <Link href="/messages/sent">Sent messages</Link>,
    icon: <SendOutlined />,
    key: "sent",
  },
  {
    label: <Link href="/messages/scheduled">Scheduled messages</Link>,
    icon: <ClockCircleOutlined />,
    key: "scheduled",
  },
]

interface SidebarProps {
  selectedTab: string;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <Sider width={220}>
      <Menu
        style={{ height: "100%", padding: "10px 0" }}
        mode="inline"
        items={items}
        selectedKeys={[props.selectedTab]}
      />
    </Sider>
  )
}

export default Sidebar;
