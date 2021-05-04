import React, { Component } from "react";
import api from "../../api";

class LinkItem extends Component {
  itemLink = (event) => {
    event.preventDefault();

    window.location.href = `/item/${this.props.id}`;
  };

  render() {
    return <div onClick={this.itemLink}>Item</div>;
  }
}

class ItemsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllItems().then((items) => {
      this.setState({
        items: items.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { items, isLoading } = this.state;

    const listItems = items.map((item) =>
    <LinkItem id={item._id} key={item._id}/>
    );

    console.log("TCL: ItemsList -> render -> items", items);

    let showGrid = true;
    if (!items.length) {
      showGrid = false;
    }

    return (
      <div>
        <h1>Grid</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">{listItems}</div>
      </div>
    );
  }
}

export default ItemsGrid;
