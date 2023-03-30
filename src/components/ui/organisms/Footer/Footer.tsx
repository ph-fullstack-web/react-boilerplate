import {Layout, Typography} from 'antd';

const {Footer} = Layout;
const {Text} = Typography;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#f0f2f5',
};

export const AppFooter = () => {
  return (
    <Footer style={footerStyle}>
      <Text type="secondary" style={{textAlign: 'center'}}>
        © 2023 MyCompany, Inc. All rights reserved.
      </Text>
    </Footer>
  );
};
