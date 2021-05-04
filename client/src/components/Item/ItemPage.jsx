import React, { Component } from "react";
import api from "../../api";

import * as ROUTES from "../../constants/routes";

class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      type: "",
      brand: "",
      season: "",
    };
  }
  
  componentDidMount = async () => {
    const { id } = this.state;
    const item = await api.getItemById(id);

    this.setState({
      type: item.data.data.type,
      brand: item.data.data.brand,
      season: item.data.data.season,
    });
  };

  render() {
    const { type, brand, season } = this.state;
    return (
      <div>
        <h1>Item Page</h1>
        <div>
          <ul>
            <li>Type: {type}</li>
            <li>Brand: {brand}</li>
            <li>Season: {season}</li>
          </ul>
        </div>
        <a href={ROUTES.ITEMS_GRID}>Back</a>
      </div>
    );
  }
}

export default ItemPage;
