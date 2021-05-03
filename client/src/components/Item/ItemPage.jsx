import React, { Component } from "react";

import * as ROUTES from "../../constants/routes";

class ItemPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        type: "",
        brand: "",
        season: "",
      };
    }

    render() {
      const { type, brand, season } = this.state;
      return (
        <div>
            <div>
                <ul>
                    <li>
                        "Type: ${type}"
                    </li>
                    <li>
                        "Brand: ${brand}"
                    </li>
                    <li>
                        "Season: ${season}"
                    </li>
                </ul>
            </div>
            <button>Update</button>
            <button>Back</button>
        </div>
      );
    }
};

export default ItemPage;