import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Layout } from 'antd';
import { MainMenu } from './features/menu/main/MainMenu';
import { ServicePage } from './features/pages/developers/ServicePage';
import { UserPage } from './features/pages/users/UserPage';

const { Header, Content, Footer } = Layout;


const App = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <MainMenu/>
        </Header>

        <Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            <Route exact path='/welcome/'><UserPage/></Route>
            <Route path='/other/developers/'><ServicePage/></Route>
            <Route path='/other/counter/'><Counter/></Route>
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  )
}

export default App;
