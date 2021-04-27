import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as ROUTES from '../constants/routes';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={ROUTES.LANDING} className="navbar-brand">
                    Cloth Web
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to={ROUTES.SIGN_IN} className="nav-link">
                                Sign In
                            </Link>
                        </Item>
                        <Item>
                            <Link to={ROUTES.HOME} className="nav-link">
                                Home
                            </Link>
                        </Item>
                        <Item>
                            <Link to={ROUTES.ACCOUNT} className="nav-link">
                                Account
                            </Link>
                        </Item>
                        <Item>
                            <Link to={ROUTES.ADMIN} className="nav-link">
                                Admin
                            </Link>
                        </Item>
                        <Item>
                            <Link to={ROUTES.ITEMS_LIST} className="nav-link">
                                List Items
                            </Link>
                        </Item>
                        <Item>
                            <Link to={ROUTES.ITEMS_CREATE} className="nav-link">
                                Create Item
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links