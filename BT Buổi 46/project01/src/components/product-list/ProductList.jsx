import React, { useEffect, useState } from "react";
import styles from "./product.scss";
import { client } from "../../api/client";
import { config } from "../../api/config";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import svg from "../img-cart/cart.svg";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProduct] = useState([]);
  const getProduct = async (
    query = {
      limit: 10,
    }
  ) => {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await client.get(`/products/?${queryString}`);
    if (data.code === 200) {
      setProduct(data.data.listProduct);
      const totalPage = data.data.totalPage;
    }
  };
  useEffect(() => {
    getProduct();
  });
  return (
    <div className="product-list">
      {products.map(({ image, name, price, _id, id }) => {
        return (
          <div key={id} className="product-item">
            <img src={image} alt="" />
            <h3 className="title">{name}</h3>
            <h2>{price.toLocaleString()}</h2>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch({
                  type: "add/cart",
                });
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        );
      })}
    </div>
  );
}
