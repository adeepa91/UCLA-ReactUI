import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { HeaderLayout } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ContentLayout } from './components/Content';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="layout-header">
          <HeaderLayout />
        </Header>
        <Content style={{ padding: '20px 20px 0px 20px' }}>
          <ContentLayout />
        </Content>
        <Footer className="layout-footer">Footer</Footer>
      </Layout>
      
    </Layout>
  );
}

export default App;
