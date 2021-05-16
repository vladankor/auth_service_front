import { ServiceLogin } from './components/ServiceLogin';
import { ServiceRegister } from './components/ServiceRegister';
import { Row, Col, Divider } from 'antd'


export const ServicePage = () => {
  return (
    <Row justify='space-around' type='flex'>
        <Col span={11}><ServiceLogin/></Col>
        <Col span={2} style={{alignItems: 'middle'}}><Divider type='vertical' style={{height: '100%'}}/></Col>
        <Col span={11}><ServiceRegister/></Col>
    </Row>
  )
}