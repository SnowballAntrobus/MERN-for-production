import React, { Component } from "react";
import api from "../../api";

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
    console.log("TCL: ItemsList -> render -> items", items);

    let showGrid = true;
    if (!items.length) {
      showGrid = false;
    }

    return (
      <h1>Grid</h1>
    );
  }
}

export default ItemsGrid;
