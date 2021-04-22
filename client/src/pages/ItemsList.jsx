import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllItems().then(items => {
            this.setState({
                items: items.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { items, isLoading } = this.state
        console.log('TCL: ItemsList -> render -> items', items)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Type',
                accessor: 'type',
                filterable: true,
            },
            {
                Header: 'Brand',
                accessor: 'brand',
                filterable: true,
            },
            {
                Header: 'Season',
                accessor: 'season',
                filterable: true,
            },
        ]

        let showTable = true
        if (!items.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={items}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ItemsList