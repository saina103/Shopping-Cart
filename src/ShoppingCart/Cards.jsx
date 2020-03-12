import React, { Component } from "react";
import Card from "./CardUI";
import "./card-style.css";

import img1 from "../assets/Shoes.jpg";
import img2 from "../assets/Watches.jpg";
import img3 from "../assets/Bags.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
        planets: [],
    };
}
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-3'>
            <Card imgsrc={img1} title='Shoes' price='595.0' />
          </div>
          <div className='col-md-3'>
            <Card imgsrc={img2} title='Watches'price='1999.0' />
          </div>
          <div className='col-md-3'>
            <Card imgsrc={img3} title='Bags' price ='555.0' />
          </div>
          <div className='col-md-3' >
            <div class="btn-group dropright">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency
             </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">INR</a>
                <a class="dropdown-item" href="#">USD</a>

              </div>
            </div>
          

          </div>
        </div>
      </div>
    );
  }
}

export default Cards;