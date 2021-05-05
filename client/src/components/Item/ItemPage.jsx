import React, { Component } from "react";

import { withFirebase } from "../Firebase";

import api from "../../api";

class AddItemToWishlist extends Component {
  addToWishlist = (event) => {
    event.preventDefault();
    const id = this.props.firebase.getUID();
    api.getWishlistById(id).then((wishlist) => {
      if (!wishlist.data.data.items.includes(this.props.item._id)) {
        const newItems = [...wishlist.data.data.items];
        newItems.push(this.props.item);
        const payload = { items: newItems };
        api.updateWishlistById(id, payload);
      } else {
        window.alert("Item is already in your wishlist!");
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
      type: item.data.data.type,
      brand: item.data.data.brand,
      season: item.data.data.season,
    });
  };

  render() {
    const { id, type, brand, season } = this.state;
    const item = { _id: id, type: type, brand: brand, season: season };
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
      </div>
    );
  }
}

export default withFirebase(ItemPage);
