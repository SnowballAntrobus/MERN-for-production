import React, { Component } from "react";
import api from "../../api";

class LinkItem extends Component {
  itemLink = (event) => {
    event.preventDefault();

    window.location.href = `/item/${this.props.item._id}`;
  };
  removeItem = () => {
    this.props.removeItem(this.props.item);
  };

  render() {
    return (
      <div>
        <div>Type: {this.props.item.type}</div>
        <div>Brand: {this.props.item.brand}</div>
        <div>Season: {this.props.item.season}</div>
        <button onClick={this.itemLink}>Link</button>
        <button onClick={this.removeItem}>Remove</button>
      </div>
    );
  }
}

class WishlistUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      items: [],
    };
  }

  componentDidMount = async () => {
    const { id } = this.state;
    const wishlist = await api.getWishlistById(id);

    this.setState({
      items: wishlist.data.data.items
    });
  };

  removeItem = async (item_to_remove) => {
    const { id, items } = this.state;
    const result = items.filter(item => item !== item_to_remove);
    const payload = { result };

    await api.updateWishlistById(id, payload);
  }

  render() {
    const { items } = this.state;

    const listItems = items.map((item) =>
    <LinkItem item={item} key={item._id} removeItem={this.removeItem}/>
    );

    console.log("TCL: ItemsGrid -> render -> items", items);

    return (
      <div>
        <h1>Grid</h1>
        <div className="grid grid-cols-1">{listItems}</div>
      </div>
    );
  }
}

export default WishlistUpdate;