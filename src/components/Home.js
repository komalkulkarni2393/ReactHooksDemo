import React from 'react';
import { useSelector, useStore, useDispatch } from 'react-redux';
import { Link, useLocation, Route, useHistory, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

import MyMap from './MyMap';
import MyStyledHeading from '../styledComponent/header';
import allActions from '../actions/index';

const MyStyledComponent = styled.p`
    color: white;
`;

const Home = () => {
    // const store = useStore();
    // const currentUser = store.getState().loginReducer.user;

    const history = useHistory();
    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.loginReducer.user);
    let currentLocation = useLocation().pathname;
    const pathToMap = currentLocation+"/map";

    const logout = () => {
        console.log("logout called");
        dispatch(allActions.userActions.logout());
        history.push("/");
    }

    return(
        <div>
            <Router>
                <MyStyledHeading>
                    <MyStyledComponent>Hi {currentUser}, Welcome!</MyStyledComponent>
                </MyStyledHeading>
                <div id="links">
                    <Link to={pathToMap} id="linkToMap">Go to Map</Link>
                    <Button type="link" onClick={logout}>Logout</Button> 
                </div>
                <Route exact path={pathToMap} component={MyMap} />
            </Router>
        </div>
    );
}

export default Home;

