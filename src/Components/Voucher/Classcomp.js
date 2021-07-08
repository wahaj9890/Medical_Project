import React, { Component } from "react";
import Purchasetable from "./Purchasetable";
export default class Classcomp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <ReactToPrint
          trigger={() => {
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.props.componentRef}
        /> */}
        <Purchasetable
          removeItemDetails={this.props.removeItemDetails}
          cartList={this.props.cartList}
        />
      </div>
    );
  }
}
