import React, { Component } from "react";
import api from "../../api";

import { withAuthorization } from '../Session';

import styled from "styled-components";

const Title = styled.h1.attrs({
  classType: "h1",
})``;

const Wrapper = styled.div.attrs({
  classType: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  classType: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  classType: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  classType: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class ItemsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      brand: "",
      season: "",
    };
  }

  handleChangeInputType = async (event) => {
    const type = event.target.value;
    this.setState({ type });
  };

  handleChangeInputBrand = async (event) => {
    const brand = event.target.value;
    this.setState({ brand });
  };

  handleChangeInputSeason = async (event) => {
    const season = event.target.value;
    this.setState({ season });
  };

  handleIncludeItem = async () => {
    const { type, brand, season } = this.state;
    const payload = { type, brand, season };

    await api.insertItem(payload).then((res) => {
      window.alert(`Item inserted successfully`);
      this.setState({
        type: "",
        brand: "",
        season: "",
      });
    });
  };

  render() {
    const { type, brand, season } = this.state;
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

        <Button onClick={this.handleIncludeItem}>Add Item</Button>
        <CancelButton href={"/items/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ItemsInsert);
