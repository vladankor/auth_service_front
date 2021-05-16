import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const MainMenu = () => {
    return (
    <Menu theme='light' mode='horizontal' defaultSelectedKeys={['welcome']}>
      <Menu.Item key='welcome'><Link to='/welcome/'>Welcome</Link></Menu.Item>
      <Menu.SubMenu key='other' icon={<SettingOutlined />} title='Other'>
        <Menu.Item key='other_about'><Link to='/other/about/'>About</Link></Menu.Item>
        <Menu.Item key='other_terms'><Link to='/other/terms/'>Terms</Link></Menu.Item>
        <Menu.Item key='other_developers'><Link to='/other/developers/'>Developers</Link></Menu.Item>
        <Menu.Item key='other_counter'><Link to='/other/counter/'>Counter</Link></Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
};
