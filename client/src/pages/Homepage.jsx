import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/Cart";

import axios from "axios";
import {  Checkbox, Radio , Collapse  } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import useCategory from "../hooks/useCategory";

const { Panel } = Collapse;
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart , setCart] = useCart()
  const navigate = useNavigate()
  //get all cat
  
  const  categories = useCategory();
   
  useEffect(() => {
    
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://ecommerce-e3o2.onrender.com/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("https://ecommerce-e3o2.onrender.com/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://ecommerce-e3o2.onrender.com/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    console.log(`Category ${id} checked: ${value}`);
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("https://ecommerce-e3o2.onrender.com/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Products - Best offers "}>
      <Carousel />
       <div className="container-fluid row mt-3">
      
       <div className="col-md-3 filter-section mt-3">
      <Collapse accordion>
        <Panel header="Filter By Category" key="1">
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
        </Panel>
        <Panel header="Filter By Price" key="2">
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
        </Panel>
      </Collapse>
      <div className="d-flex flex-column mt-3">
        <button
          className="btn btn-danger"
          onClick={() => window.location.reload()}
        >
          RESET FILTERS
        </button>
      </div>
    </div>

        <div className="col-md-9">
          <h1 className="text-center text-secondary mb-4">All Products</h1>
          <div className="d-flex flex-wrap justify-content-center hero">
          {products?.map((p) => (
            <div key={p._id} className="card m-2" style={{ width: "18rem", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
              <img
                src={`https://ecommerce-e3o2.onrender.com/api/v1/product/product-photo/${p._id}`}
                className="card-img-top thisimage"
                alt={p.name}
                style={{ height: "160px", objectFit: "contain" }}
              />
                  <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">$ {p.price}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-dark" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                  <button className="btn btn-secondary h-mb-2" onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem('cart', JSON.stringify([...cart, p]));
                    alert("added to cart");
                  }}>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="m-2 p-3 text-center">
            {((checked.length > 0) || (radio.length > 0)) ? null : (
              products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Load More"}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;