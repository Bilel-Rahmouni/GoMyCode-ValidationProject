import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import { decrement } from "../actions";
import { clear_cart } from "../actions";
import img1 from "../images/item1.jpg";
import img2 from "../images/item2.bmp";
import img3 from "../images/item3.jpg";
import img4 from "../images/item4.jpg";
import openImg from "../images/wereopen.jpg";
import celebration from "../images/celebration.mp4";
import "../App.css";

const shopState = [
  {
    id: 1,
    title: "item 1",
    img: img1,
    price: 220,
  },
  {
    id: 2,
    title: "item 2",
    img: img2,
    price: 50,
  },
  {
    id: 3,
    title: "item 3",
    img: img3,
    price: 120,
  },
  {
    id: 4,
    title: "item 4",
    img: img4,
    price: 360,
  },
];
function Shop() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <h1>OUR SHOP IS OPEN NOW!!</h1>
      <div className="open">
        <video autoPlay loop>
          <source className="celebration" src={celebration} type="video/mp4" />
        </video>
        <img src={openImg} id="openImg" alt="" />
        <video autoPlay loop>
          <source src={celebration} type="video/mp4" />
        </video>
      </div>
      {shopState.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "300px", height: "400px" }}
        >
          <img
            className="card-img-top"
            src={item.img}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.price}Dt</h6>
            <button
              className="btn btn-primary m-2 btn-lg"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart">
        <hr />
        <h1>your bag:{counter} items</h1>
        <button
          className="btn btn-danger btn-m"
          onClick={() => dispatch(clear_cart())}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}

export default Shop;
