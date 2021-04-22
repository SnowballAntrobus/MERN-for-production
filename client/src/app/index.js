import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ItemsList, ItemsInsert, ItemsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/items/list" exact component={ItemsList} />
                <Route path="/items/create" exact component={ItemsInsert} />
                <Route
                    path="/items/update/:id"
                    exact
                    component={ItemsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App