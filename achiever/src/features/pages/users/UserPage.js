import { UserLogin } from './components/UserLogin';
import { UserRegister } from './components/UserRegister';
import { Row, Col } from 'antd'


export const UserPage = () => {
    return (
        <Row justify='space-around'>
            <Col span={12}><UserLogin/></Col>
            <Col span={12}><UserRegister/></Col>
        </Row>
    )
}