import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";

import allActions from '../actions/index';
import MyStyledHeading from '../styledComponent/header';

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const usernameEl = useRef(null);

    const login = () => {
        let username = usernameEl.current.state.value;
        dispatch(allActions.userActions.login(username));
        history.push("/home");
    }

    return(
        <div>
            <MyStyledHeading>React Hooks demo</MyStyledHeading>
            <Form name="loginForm" initialValues={{remember: true,}} onFinish={login} id="loginForm">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input ref={usernameEl}/>
                </Form.Item>
    
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;