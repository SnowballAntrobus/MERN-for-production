import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    classType: 'h1',
})``

const Wrapper = styled.div.attrs({
    classType: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    classType: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    classType: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    classType: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ItemsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            type: '',
            brand: '',
            season: '',
        }
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleChangeInputBrand = async event => {
        const brand = event.target.value
        this.setState({ brand })
    }

    handleChangeInputSeason = async event => {
        const season = event.target.value
        this.setState({ season })
    }

    handleUpdateItem = async () => {
        const { id, type, brand, season } = this.state
        const payload = { type, brand, season }

        await api.updateItemById(id, payload).then(res => {
            window.alert(`Item updated successfully`)
            this.setState({
                type: '',
                brand: '',
                season: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const item = await api.getItemById(id)

        this.setState({
            type: item.data.data.type,
            brand: item.data.data.brand,
            season: item.data.data.season,
        })
    }

    render() {
        const { type, brand, season } = this.state
        return (
            <Wrapper>
                <Title>Create Item</Title>

                <Label>Type: </Label>
                <InputText
                    type="text"
                    value={type}
                    onChange={this.handleChangeInputType}
                />

                <Label>Brand: </Label>
                <InputText
                    type="text"
                    value={brand}
                    onChange={this.handleChangeInputBrand}
                />

                <Label>Season: </Label>
                <InputText
                    type="text"
                    value={season}
                    onChange={this.handleChangeInputSeason}
                />

                <Button onClick={this.handleUpdateItem}>Update Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ItemsUpdate