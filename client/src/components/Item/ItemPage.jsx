import React, { Component } from "react";

import { withFirebase } from "../Firebase";

import api from "../../api";

import * as ROUTES from "../../constants/routes";

class AddItemToWishlist extends Component {
  addToWishlist = (event) => {
    event.preventDefault();
    const id = this.props.firebase.getUID();
    api.getWishlistById(id).then((wishlist) => {
      if (!wishlist.items.some((item) => item._id === this.props.item._id)) {
        wishlist.items.push(this.props.item);
        const payload = { id: id, wishlist: wishlist.items };
        api.updateWishlistById(id, payload);
      } else {
        alert("Item is already in your wishlist!");
      }
    });
  };

  render() {
    return <button onClick={this.addToWishlist}>Add to Wishlist</button>;
  }
}

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
      item: item,
    });
  };

  render() {
    const item = this.state;
    const { type, brand, season } = item;

    return (
      <div>
        <h1>Item Page</h1>
        <AddItemToWishlist item={item} firebase={this.props.firebase} />
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

export default withFirebase(ItemPage);
