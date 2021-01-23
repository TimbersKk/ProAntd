import React from 'react';
import "./style.less"
import { Form, Button, Row, Col, Tabs, Input } from "antd"
import Item from 'antd/lib/list/Item';

const { TabPane } = Tabs

// interface tabType {
//     [key: string]: any,
// }[]
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const LoginForm: React.FC<{}> = () => {
    return <>
        <Form
            {...layout}
        >
            <Form.Item
                label="账号"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
            >
                <Input />
            </Form.Item>
        </Form>
    </>
}
const PhoneForm: React.FC<{}> = () => {
    return <>
        <Form
            {...layout}
        >
            <Form.Item
                label="账号"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
            >
                <Row>
                    <Col span={15}>
                        <Input />
                    </Col>
                    <Col span={4}>
                        <Button>获取验证码</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    </>
}

export default () => {
    const [TabKey, setTabKey] = React.useState<string>("login");


    return (
        <>
            <div className="Login">
                <div className="Login_wrap">
                    <div className="Login_tabs">
                        <Tabs defaultActiveKey="login" centered={true}>
                            <TabPane key="login" tab="账号密码登录">
                                <LoginForm />
                            </TabPane>
                            <TabPane key="phone" tab="手机号登录" >
                                <PhoneForm />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}
